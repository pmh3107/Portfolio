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
        title="Recruiter-ready AI helper"
        description="Hỏi nhanh về CV hoặc dán JD để có đánh giá mức độ phù hợp theo cấu trúc rõ ràng."
      />

      <div className="mb-5 inline-flex rounded-2xl border border-white/20 bg-black/20 p-1 backdrop-blur-lg">
        <button
          onClick={() => setTab("chat")}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            tab === "chat" ? "bg-white/20 text-white" : "text-slate-300 hover:text-white"
          }`}
        >
          Chat with CV
        </button>
        <button
          onClick={() => setTab("match")}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            tab === "match" ? "bg-white/20 text-white" : "text-slate-300 hover:text-white"
          }`}
        >
          JD Matcher
        </button>
      </div>

      {tab === "chat" ? <ChatBox /> : <JDMatcher />}
    </section>
  );
}
