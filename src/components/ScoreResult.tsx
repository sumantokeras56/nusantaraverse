import type { DecisionResult } from "@/lib/scoring";

const scoreLabels = [
  { key: "economy", label: "Ekonomi", icon: "💰" },
  { key: "environment", label: "Lingkungan", icon: "🌿" },
  { key: "social", label: "Sosial", icon: "🤝" },
  { key: "sustainability", label: "Keberlanjutan", icon: "♻️" }
] as const;

type ScoreResultProps = {
  result: DecisionResult;
};

export function ScoreResult({ result }: ScoreResultProps) {
  return (
    <div className="smooth-card p-5">
      <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Hasil Keputusan</p>
          <h3 className="mt-1 text-2xl font-bold text-nusantara-navy">{result.grade}</h3>
        </div>
        <div className="rounded-3xl bg-nusantara-navy px-6 py-4 text-white">
          <p className="text-sm text-white/70">Total Skor</p>
          <p className="text-3xl font-bold">{result.totalScore} / {result.maxScore}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {scoreLabels.map((item) => {
          const value = result.option.scores[item.key];
          return (
            <div key={item.key} className="rounded-3xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-nusantara-navy">{item.icon} {item.label}</span>
                <span className="font-bold text-emerald-700">+{value}</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-nusantara-green" style={{ width: `${value}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-3xl bg-blue-50 p-5">
        <p className="font-bold text-nusantara-navy">Penjelasan AI</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{result.option.feedback}</p>
      </div>
      <div className="mt-4 rounded-3xl bg-emerald-50 p-5">
        <p className="font-bold text-nusantara-navy">Rekomendasi Perbaikan</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{result.option.recommendation}</p>
      </div>
    </div>
  );
}
