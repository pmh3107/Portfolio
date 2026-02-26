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
          className="w-full rounded-2xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        />

        <button
          onClick={onAnalyze}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Sparkles size={16} /> {loading ? "Đang phân tích..." : "Phân tích mức độ phù hợp"}
        </button>

        <div className="rounded-2xl border border-white/20 bg-black/20 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-200">Kết quả AI</p>
          <pre className="whitespace-pre-wrap text-sm text-slate-100">{result || "Kết quả sẽ hiển thị ở đây."}</pre>
        </div>
      </div>
    </Card>
  );
}
