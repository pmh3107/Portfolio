export function LiquidBlobsBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-slate-950">
      <div className="liquid-blob absolute -left-24 top-10 h-80 w-80 rounded-[58%_42%_60%_40%/42%_60%_40%_58%] bg-cyan-400/45 blur-3xl" />
      <div className="liquid-blob-reverse absolute right-[-8rem] top-24 h-[26rem] w-[26rem] rounded-[40%_60%_45%_55%/55%_45%_60%_40%] bg-violet-500/40 blur-3xl" />
      <div className="liquid-blob-slow absolute bottom-[-8rem] left-[20%] h-[30rem] w-[30rem] rounded-[62%_38%_55%_45%/45%_55%_40%_60%] bg-emerald-400/35 blur-3xl" />
      <div className="liquid-blob absolute bottom-[-9rem] right-[10%] h-[24rem] w-[24rem] rounded-[48%_52%_40%_60%/60%_40%_58%_42%] bg-blue-500/30 blur-3xl" />
    </div>
  );
}
