"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Simulation } from "@/types";
import { calculateDecisionScore, type DecisionResult } from "@/lib/scoring";
import { ScoreResult } from "@/components/ScoreResult";

type SimulationRunnerProps = {
  simulation: Simulation;
};

export function SimulationRunner({ simulation }: SimulationRunnerProps) {
  const [selectedOption, setSelectedOption] = useState<string>(simulation.options[0]?.id ?? "");
  const [result, setResult] = useState<DecisionResult | null>(null);

  function submitDecision() {
    setResult(calculateDecisionScore(simulation.id, selectedOption));
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
                  onChange={() => setSelectedOption(option.id)}
                  className="mt-1"
                />
                <div>
                  <p className="font-bold text-nusantara-navy">{option.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{option.description}</p>
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
            <Link
              href="/student/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-nusantara-green px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              <CheckCircle2 size={18} /> Selesai dan Ambil XP
            </Link>
          </>
        ) : (
          <div className="smooth-card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Belum Ada Hasil</p>
            <h2 className="mt-2 text-2xl font-bold text-nusantara-navy">Ambil keputusan untuk melihat dampaknya.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sistem akan menghitung dampak pada aspek ekonomi, lingkungan, sosial, dan keberlanjutan.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
