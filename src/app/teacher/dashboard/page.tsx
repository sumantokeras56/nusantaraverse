"use client";

import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { TeacherChart } from "@/components/TeacherChart";
import {
  buildCsvReport,
  buildTeacherInsight,
  getAssessmentByType,
  getAverageSimulationScore,
  getDynamicLeaderboard
} from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";

export default function TeacherDashboardPage() {
  const { progress } = useDemoProgress();
  const leaderboard = getDynamicLeaderboard(progress);
  const pre = getAssessmentByType(progress, "pre");
  const post = getAssessmentByType(progress, "post");
  const avgSimulation = getAverageSimulationScore(progress);
  const completionRate = Math.round((progress.completedMissionIds.length / 7) * 100);
  const understanding = post?.percentage ?? 85;

  const topicNeeds = [
    { topic: "Dampak Ekonomi", value: avgSimulation ? `${Math.max(30, Math.min(90, Math.round(avgSimulation / 4)))}%` : "45%", note: "Perlu penguatan contoh jangka panjang dan trade-off kebijakan." },
    { topic: "Konservasi", value: progress.completedMissionIds.length ? "72%" : "55%", note: "Pemahaman meningkat setelah simulasi lingkungan." },
    { topic: "Partisipasi Masyarakat", value: progress.chatLogs.length > 3 ? "70%" : "60%", note: "Perlu diskusi kelompok dan studi kasus lokal." }
  ];

  function downloadReport() {
    const csv = buildCsvReport(progress);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "laporan-guru-nusantaraverse.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="teacher" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Dashboard Guru</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">Analitik Pembelajaran Kelas</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Data dashboard mengambil progress siswa yang tersimpan di browser: misi, simulasi, chat AI, pre-test, dan post-test.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <StatCard label="Siswa Aktif" value="32" helper="XI IPS 2 + demo user" icon="👥" />
          <StatCard label="Penyelesaian Misi" value={`${completionRate}%`} helper={`${progress.completedMissionIds.length}/7 misi demo`} icon="✅" />
          <StatCard label="Pemahaman" value={`${understanding}%`} helper={post ? "Post-test siswa" : "Data contoh"} icon="📘" />
          <StatCard label="Interaksi AI" value={String(progress.chatLogs.length)} helper="Pertanyaan tersimpan" icon="🤖" />
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <button onClick={downloadReport} className="smooth-card p-5 text-left transition hover:-translate-y-1 hover:shadow-xl">
            <Download className="text-nusantara-blue" />
            <p className="mt-3 text-xl font-bold text-nusantara-navy">Unduh Laporan CSV</p>
            <p className="mt-2 text-sm text-slate-600">Berisi XP, hasil asesmen, riwayat simulasi, dan data aktivitas.</p>
          </button>
          <Link href="/teacher/report" className="smooth-card p-5 transition hover:-translate-y-1 hover:shadow-xl">
            <FileText className="text-nusantara-blue" />
            <p className="mt-3 text-xl font-bold text-nusantara-navy">Buka Laporan Guru</p>
            <p className="mt-2 text-sm text-slate-600">Ringkasan siap pakai untuk proposal dan presentasi.</p>
          </Link>
          <div className="smooth-card p-5">
            <p className="text-sm text-slate-500">Pre/Post Test</p>
            <p className="mt-2 text-2xl font-bold text-nusantara-navy">{pre ? `${pre.percentage}%` : "-"} → {post ? `${post.percentage}%` : "-"}</p>
            <p className="mt-2 text-sm text-slate-600">Gunakan untuk membuktikan peningkatan pemahaman.</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.72fr]">
          <TeacherChart />
          <section className="smooth-card p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Topik Perlu Ditingkatkan</p>
            <h2 className="mt-1 text-2xl font-bold text-nusantara-navy">Prioritas Guru</h2>
            <div className="mt-5 space-y-4">
              {topicNeeds.map((item) => (
                <div key={item.topic} className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-nusantara-navy">{item.topic}</p>
                    <p className="font-bold text-nusantara-blue">{item.value}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-3xl bg-blue-50 p-5">
              <p className="font-bold text-nusantara-navy">AI Insight</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{buildTeacherInsight(progress)}</p>
            </div>
          </section>
        </div>

        <section className="smooth-card mt-6 overflow-hidden p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Leaderboard Kelas</p>
              <h2 className="text-2xl font-bold text-nusantara-navy">Progress Siswa</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Nama</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">XP</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item) => (
                  <tr key={`${item.rank}-${item.name}`} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-bold text-nusantara-navy">{item.rank}</td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.className}</td>
                    <td className="px-4 py-3">Level {item.level}</td>
                    <td className="px-4 py-3 font-semibold text-nusantara-blue">{item.xp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
