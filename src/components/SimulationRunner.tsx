"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Save } from "lucide-react";
import type { Simulation } from "@/types";
import { calculateDecisionScore, type DecisionResult } from "@/lib/scoring";
import { completeMission, recordSimulationResult } from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";
import { ScoreResult } from "@/components/ScoreResult";

const aspectLabels = [
  ["economy", "Ekonomi"],
  ["environment", "Lingkungan"],
  ["social", "Sosial"],
  ["sustainability", "Keberlanjutan"]
] as const;

type SimulationRunnerProps = {
  simulation: Simulation;
};

export function SimulationRunner({ simulation }: SimulationRunnerProps) {
  const { refresh, progress } = useDemoProgress();
  const [selectedOption, setSelectedOption] = useState<string>(simulation.options[0]?.id ?? "");
  const [result, setResult] = useState<DecisionResult | null>(null);
  const [saved, setSaved] = useState(false);

  const missionCompleted = progress.completedMissionIds.includes(simulation.missionId);

  function submitDecision() {
    const nextResult = calculateDecisionScore(simulation.id, selectedOption);
    setResult(nextResult);
    setSaved(false);
  }

  function saveResultAndXp() {
    if (!result) return;

    recordSimulationResult({
      simulationId: simulation.id,
      simulationTitle: simulation.title,
      selectedOptionId: result.option.id,
      selectedOptionLabel: result.option.label,
      economy: result.option.scores.economy,
      environment: result.option.scores.environment,
      social: result.option.scores.social,
      sustainability: result.option.scores.sustainability,
      totalScore: result.totalScore,
      grade: result.grade,
      feedback: result.option.feedback,
      recommendation: result.option.recommendation
    });
    completeMission(simulation.missionId);
    refresh();
    setSaved(true);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <section className="smooth-card p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Simulasi Interaktif</p>
        <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">{simulation.title}</h1>
        <div className="mt-5 rounded-3xl bg-slate-50 p-5">
          <p className="text-sm font-bold text-nusantara-navy">Peran Siswa</p>
          <p className="mt-1 text-sm text-slate-600">{simulation.role}</p>
        </div>
        <div className="mt-4 rounded-3xl bg-nusantara-sky/60 p-5">
          <p className="text-sm font-bold text-nusantara-navy">Situasi</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{simulation.scenario}</p>
        </div>

        <div className="mt-6 space-y-3">
          <p className="font-bold text-nusantara-navy">Pilih Kebijakanmu</p>
          {simulation.options.map((option) => (
            <label
              key={option.id}
              className={`block cursor-pointer rounded-3xl border p-4 transition hover:border-nusantara-blue ${
                selectedOption === option.id ? "border-nusantara-green bg-emerald-50" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="decision"
                  checked={selectedOption === option.id}
                  onChange={() => {
                    setSelectedOption(option.id);
                    setResult(null);
                    setSaved(false);
                  }}
                  className="mt-1"
                />
                <div className="flex-1">
                  <p className="font-bold text-nusantara-navy">{option.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{option.description}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-4">
                    {aspectLabels.map(([key, label]) => (
                      <div key={key} className="rounded-2xl bg-white/70 px-3 py-2 text-xs text-slate-600">
                        {label}: <b className="text-nusantara-navy">{option.scores[key]}</b>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={submitDecision}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-nusantara-navy px-6 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Putuskan <ArrowRight size={18} />
        </button>
      </section>

      <aside className="space-y-6">
        {result ? (
          <>
            <ScoreResult result={result} />
            <div className="smooth-card p-5">
              <p className="font-bold text-nusantara-navy">Simpan Progress</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Klik tombol simpan agar hasil keputusan masuk ke dashboard guru, leaderboard, dan laporan. XP misi hanya diberikan satu kali.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={saveResultAndXp}
                  className="inline-flex items-center gap-2 rounded-full bg-nusantara-green px-6 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  <Save size={18} /> {saved ? "Tersimpan" : missionCompleted ? "Simpan Ulang Hasil" : "Simpan dan Ambil XP"}
                </button>
                <Link
                  href="/student/dashboard"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-nusantara-navy shadow-sm hover:bg-slate-50"
                >
                  <CheckCircle2 size={18} /> Dashboard
                </Link>
              </div>
              {saved ? (
                <p className="mt-4 rounded-2xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">Hasil simulasi sudah tersimpan.</p>
              ) : null}
            </div>
          </>
        ) : (
          <div className="smooth-card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Belum Ada Hasil</p>
            <h2 className="mt-2 text-2xl font-bold text-nusantara-navy">Ambil keputusan untuk melihat dampaknya.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sistem akan menghitung dampak pada aspek ekonomi, lingkungan, sosial, dan keberlanjutan. Hasil dapat disimpan sebagai progress siswa.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
