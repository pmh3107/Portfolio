"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { askGemini } from "@/services/ai.service";
import { Card } from "@/components/ui/Card";

export function JDMatcher() {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onAnalyze = async () => {
    if (!jd.trim() || loading) return;
    setLoading(true);
    try {
      const response = await askGemini({ type: "match", prompt: jd.trim() });
      setResult(response.output);
    } catch (error) {
      setResult(`Không thể phân tích JD lúc này. ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="h-full">
      <div className="space-y-4">
        <textarea
          aria-label="Job description input"
          value={jd}
          onChange={(event) => setJd(event.target.value)}
          rows={8}
          placeholder="Dán Job Description tại đây..."
          className="w-full rounded-soft border border-slate-300 bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-slate-700"
        />

        <button
          onClick={onAnalyze}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-soft bg-primary px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Sparkles size={16} /> {loading ? "Đang phân tích..." : "Phân tích mức độ phù hợp"}
        </button>

        <div className="rounded-soft border border-slate-200 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900/60">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Kết quả AI</p>
          <pre className="whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-200">{result || "Kết quả sẽ hiển thị ở đây."}</pre>
        </div>
      </div>
    </Card>
  );
}
