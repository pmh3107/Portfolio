import type {
  ChatHistoryItem,
  GeminiRequestBody,
  GeminiRequestType,
  GeminiResponseBody,
} from "@/core/types/ai.types";

/**
 * Services Layer: adapter gọi API route nội bộ.
 * Client chỉ gọi /api/gemini, không bao giờ đụng GEMINI_API_KEY.
 */
export async function askGemini(params: {
  type: GeminiRequestType;
  prompt: string;
  history?: ChatHistoryItem[];
}): Promise<GeminiResponseBody> {
  const payload: GeminiRequestBody = {
    type: params.type,
    prompt: params.prompt,
    history: params.history ?? [],
  };

  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(errorBody?.error ?? "Lỗi gọi AI service.");
  }

  return (await response.json()) as GeminiResponseBody;
}
