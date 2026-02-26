"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import type { ChatHistoryItem } from "@/core/types/ai.types";
import { askGemini } from "@/services/ai.service";
import { Card } from "@/components/ui/Card";

export function ChatBox() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatHistoryItem[]>([
    { role: "assistant", content: "Xin chào, mình là trợ lý AI của Hiển. Bạn muốn tìm hiểu thông tin nào?" },
  ]);

  const onSend = async () => {
    if (!input.trim() || loading) return;
    const prompt = input.trim();
    const nextHistory: ChatHistoryItem[] = [...messages, { role: "user", content: prompt }];
    setMessages(nextHistory);
    setInput("");
    setLoading(true);

    try {
      const response = await askGemini({ type: "chat", prompt, history: nextHistory });
      setMessages((prev) => [...prev, { role: "assistant", content: response.output }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Xin lỗi, hiện chưa thể phản hồi. ${(error as Error).message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="h-full">
      <div className="flex h-[460px] flex-col">
        <div className="flex-1 space-y-3 overflow-y-auto pr-1">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`max-w-[92%] rounded-2xl px-3 py-2 text-sm ${
                message.role === "user"
                  ? "ml-auto border border-cyan-200/40 bg-cyan-300/20 text-white"
                  : "border border-white/15 bg-white/10 text-slate-100"
              }`}
            >
              {message.content}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            aria-label="Chat input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") onSend();
            }}
            placeholder="Ví dụ: Hiển có kinh nghiệm gì về React Native?"
            className="w-full rounded-2xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          />
          <button
            aria-label="Send message"
            onClick={onSend}
            disabled={loading}
            className="rounded-2xl border border-white/20 bg-white/15 px-3 text-white transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <SendHorizonal size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
}
