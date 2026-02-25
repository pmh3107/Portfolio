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
    const nextHistory: ChatHistoryItem[] = [...messages, { role: "user", content: input.trim() }];
    setMessages(nextHistory);
    setInput("");
    setLoading(true);

    try {
      const response = await askGemini({ type: "chat", prompt: input.trim(), history: nextHistory });
      setMessages((prev) => [...prev, { role: "assistant", content: response.output }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Xin lỗi, hiện chưa thể phản hồi. ${(error as Error).message}`,
        },
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
              className={`max-w-[90%] rounded-soft px-3 py-2 text-sm ${
                message.role === "user"
                  ? "ml-auto bg-primary text-white"
                  : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100"
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
            className="w-full rounded-soft border border-slate-300 bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-slate-700"
          />
          <button
            aria-label="Send message"
            onClick={onSend}
            disabled={loading}
            className="rounded-soft bg-primary px-3 text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            <SendHorizonal size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
}
