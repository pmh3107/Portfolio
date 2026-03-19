import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_SYSTEM_INSTRUCTION } from "@/core/constants/ai";
import type { GeminiRequestBody } from "@/core/types/ai.types";
import { getPortfolioProfile } from "@/application/portfolio/portfolio.service";

const MODEL_NAME = "gemini-1.5-flash";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as GeminiRequestBody;
    const { prompt, type, history = [] } = body;

    if (!prompt?.trim()) {
      return NextResponse.json({ error: "Thiếu prompt." }, { status: 400 });
    }

    if (type !== "chat" && type !== "match") {
      return NextResponse.json({ error: "type không hợp lệ." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Thiếu GEMINI_API_KEY trong môi trường server." }, { status: 500 });
    }

    const profile = await getPortfolioProfile();
    const portfolioContext = JSON.stringify(profile, null, 2);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const formattedHistory = history.map((item) => ({
      role: item.role === "assistant" ? "model" : "user",
      parts: [{ text: item.content }],
    }));

    const chat = model.startChat({ history: formattedHistory });

    const taskInstruction =
      type === "match"
        ? "Phân tích JD dưới đây và trả về markdown gồm Match Score (%), Strengths, Gaps, Conclusion."
        : "Trả lời câu hỏi người dùng về hồ sơ một cách rõ ràng, chuyên nghiệp.";

    const finalPrompt = `${AI_SYSTEM_INSTRUCTION}\n\n[PORTFOLIO_DATA]\n${portfolioContext}\n[/PORTFOLIO_DATA]\n\n[USER_TASK]\n${taskInstruction}\n\nNội dung từ người dùng:\n${prompt}\n[/USER_TASK]`;

    const result = await chat.sendMessage(finalPrompt);
    return NextResponse.json({ type, output: result.response.text() });
  } catch (error) {
    console.error("Gemini route error:", error);
    return NextResponse.json({ error: "Không thể xử lý yêu cầu AI." }, { status: 500 });
  }
}
