"use client";

import { useState } from "react";
import { ChatBox } from "@/components/ai/ChatBox";
import { JDMatcher } from "@/components/ai/JDMatcher";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AIAssistantSection() {
  const [tab, setTab] = useState<"chat" | "match">("chat");

  return (
    <section id="ai-assistant" className="scroll-mt-24 py-18 md:py-22" aria-labelledby="ai-title">
      <SectionHeading
        id="ai-title"
        eyebrow="Smart AI Assistant"
        title="Trợ lý AI cho nhà tuyển dụng"
        description="Hỏi nhanh về kinh nghiệm của Hiển hoặc dán JD để đánh giá mức độ phù hợp ngay lập tức."
      />

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setTab("chat")}
          className={`rounded-soft px-4 py-2 text-sm font-semibold ${tab === "chat" ? "bg-primary text-white" : "border border-slate-300 dark:border-slate-700"}`}
        >
          Chat with CV
        </button>
        <button
          onClick={() => setTab("match")}
          className={`rounded-soft px-4 py-2 text-sm font-semibold ${tab === "match" ? "bg-primary text-white" : "border border-slate-300 dark:border-slate-700"}`}
        >
          JD Matcher
        </button>
      </div>

      {tab === "chat" ? <ChatBox /> : <JDMatcher />}
    </section>
  );
}
