"use client";

import Link from "next/link";
import { Bot, ClipboardCheck, Download, History, Trophy } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import {
  buildCsvReport,
  getAssessmentByType,
  getAverageSimulationScore,
  getLevelFromXp,
  getUnlockedBadges
} from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";

export default function StudentProgressPage() {
  const { progress } = useDemoProgress();
  const level = getLevelFromXp(progress.xp);
  const unlockedBadges = getUnlockedBadges(progress.xp);
  const pre = getAssessmentByType(progress, "pre");
  const post = getAssessmentByType(progress, "post");
  const averageSimulation = getAverageSimulationScore(progress);

  function downloadReport() {
    const csv = buildCsvReport(progress);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "laporan-progress-nusantaraverse.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Progress Siswa</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">Laporan Belajar {progress.user.name}</h1>
          <p className="mt-3 text-slate-600">Ringkasan ini dapat digunakan sebagai bahan bukti demo dan validasi pengguna.</p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-5">
          <StatCard label="XP" value={String(progress.xp)} helper={`Level ${level}`} icon="⚡" />
          <StatCard label="Misi" value={String(progress.completedMissionIds.length)} helper="Misi selesai" icon="✅" />
          <StatCard label="Simulasi" value={String(progress.simulationResults.length)} helper={averageSimulation ? `${averageSimulation}/400` : "Belum ada"} icon="⚖️" />
          <StatCard label="Chat AI" value={String(progress.chatLogs.length)} helper="Interaksi" icon="🤖" />
          <StatCard label="Badge" value={String(unlockedBadges.length)} helper="Terbuka" icon="🏅" />
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="smooth-card p-5">
            <ClipboardCheck className="text-nusantara-blue" />
            <h2 className="mt-3 text-xl font-bold text-nusantara-navy">Asesmen</h2>
            <p className="mt-2 text-sm text-slate-600">Pre-test: <b>{pre ? `${pre.percentage}%` : "Belum ada"}</b></p>
            <p className="mt-1 text-sm text-slate-600">Post-test: <b>{post ? `${post.percentage}%` : "Belum ada"}</b></p>
            {pre && post ? <p className="mt-3 rounded-2xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">Peningkatan: {post.percentage - pre.percentage}%</p> : null}
          </div>
          <div className="smooth-card p-5">
            <Trophy className="text-nusantara-blue" />
            <h2 className="mt-3 text-xl font-bold text-nusantara-navy">Badge Terbuka</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {unlockedBadges.length ? unlockedBadges.map((badge) => <span key={badge.id} className="rounded-full bg-slate-100 px-3 py-2 text-sm">{badge.icon} {badge.name}</span>) : <span className="text-sm text-slate-500">Belum ada badge.</span>}
            </div>
          </div>
          <button onClick={downloadReport} className="smooth-card p-5 text-left transition hover:-translate-y-1 hover:shadow-xl">
            <Download className="text-nusantara-blue" />
            <h2 className="mt-3 text-xl font-bold text-nusantara-navy">Unduh Laporan</h2>
            <p className="mt-2 text-sm text-slate-600">Export CSV berisi ringkasan progress dan hasil simulasi.</p>
          </button>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <section className="smooth-card overflow-hidden">
            <div className="border-b border-slate-100 p-5">
              <div className="flex items-center gap-3">
                <History className="text-nusantara-blue" />
                <h2 className="text-2xl font-bold text-nusantara-navy">Riwayat Simulasi</h2>
              </div>
            </div>
            <div className="space-y-3 p-5">
              {progress.simulationResults.length ? progress.simulationResults.map((item) => (
                <div key={item.id} className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-bold text-nusantara-navy">{item.simulationTitle}</p>
                  <p className="mt-1 text-sm text-slate-600">Keputusan: {item.selectedOptionLabel}</p>
                  <p className="mt-2 text-sm font-semibold text-nusantara-blue">Total {item.totalScore}/400 · {item.grade}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.feedback}</p>
                </div>
              )) : <p className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-600">Belum ada simulasi tersimpan.</p>}
            </div>
          </section>

          <section className="smooth-card overflow-hidden">
            <div className="border-b border-slate-100 p-5">
              <div className="flex items-center gap-3">
                <Bot className="text-nusantara-blue" />
                <h2 className="text-2xl font-bold text-nusantara-navy">Riwayat AI Tutor</h2>
              </div>
            </div>
            <div className="space-y-3 p-5">
              {progress.chatLogs.length ? progress.chatLogs.slice(0, 10).map((log) => (
                <div key={log.id} className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{log.topic}</p>
                  <p className="mt-2 font-bold text-nusantara-navy">{log.question}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{log.answer}</p>
                </div>
              )) : <p className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-600">Belum ada chat AI tersimpan.</p>}
            </div>
          </section>
        </div>

        <div className="mt-6">
          <Link href="/student/dashboard" className="rounded-full bg-nusantara-navy px-6 py-3 font-semibold text-white">Kembali ke Dashboard</Link>
        </div>
      </div>
    </main>
  );
}
