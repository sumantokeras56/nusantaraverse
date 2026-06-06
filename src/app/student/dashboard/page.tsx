"use client";

import Link from "next/link";
import { Activity, ArrowRight, ClipboardCheck, Download, RotateCcw } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MapExplorer } from "@/components/MapExplorer";
import { MissionCard } from "@/components/MissionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { BadgeCard } from "@/components/BadgeCard";
import { StatCard } from "@/components/StatCard";
import { missions } from "@/data/missions";
import {
  buildCsvReport,
  getAssessmentByType,
  getAverageSimulationScore,
  getLevelFromXp,
  getNextLevelXp,
  getProgressPercentage,
  getUnlockedBadges,
  resetProgress
} from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";

export default function StudentDashboardPage() {
  const { progress, reset } = useDemoProgress();
  const level = getLevelFromXp(progress.xp);
  const nextLevel = getNextLevelXp(progress.xp);
  const currentLevelMinXp = (level - 1) * 300;
  const unlockedBadges = getUnlockedBadges(progress.xp);
  const averageSimulation = getAverageSimulationScore(progress);
  const postTest = getAssessmentByType(progress, "post");
  const progressPercentage = getProgressPercentage(progress.xp);

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

  function handleReset() {
    resetProgress();
    reset();
  }

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 flex flex-col gap-4 rounded-[2rem] bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Selamat datang, {progress.user.name}!</p>
            <h1 className="mt-1 text-3xl font-bold text-nusantara-navy">Siap menjelajahi Indonesia hari ini?</h1>
            <p className="mt-2 text-sm text-slate-500">Data demo tersimpan otomatis di browser. Cocok untuk presentasi tanpa database.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-2xl bg-slate-100 px-4 py-3"><b>{progress.xp}</b><br />XP</div>
            <div className="rounded-2xl bg-slate-100 px-4 py-3"><b>Level {level}</b><br />Siswa</div>
            <div className="rounded-2xl bg-slate-100 px-4 py-3"><b>{progress.streak} Hari</b><br />Streak</div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <StatCard label="Misi Selesai" value={`${progress.completedMissionIds.length}/${missions.length}`} helper="Progress aktif" icon="✅" />
          <StatCard label="Pemahaman" value={postTest ? `${postTest.percentage}%` : "Belum tes"} helper="Post-test terakhir" icon="📘" />
          <StatCard label="Skor Simulasi" value={averageSimulation ? `${averageSimulation}/400` : "Belum ada"} helper="Rata-rata keputusan" icon="⚖️" />
          <StatCard label="Badge" value={`${unlockedBadges.length}`} helper="Badge terbuka" icon="🏅" />
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <Link href="/student/assessment" className="rounded-3xl bg-nusantara-navy p-5 text-white transition hover:-translate-y-1 hover:shadow-xl">
            <ClipboardCheck />
            <p className="mt-3 text-xl font-bold">Kerjakan Pre/Post Test</p>
            <p className="mt-2 text-sm text-white/70">Buktikan dampak pembelajaran dengan skor sebelum dan sesudah.</p>
          </Link>
          <Link href="/student/progress" className="rounded-3xl bg-white p-5 text-nusantara-navy shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <Activity />
            <p className="mt-3 text-xl font-bold">Lihat Progress Lengkap</p>
            <p className="mt-2 text-sm text-slate-600">Riwayat simulasi, chat AI, dan hasil asesmen.</p>
          </Link>
          <button onClick={downloadReport} className="rounded-3xl bg-white p-5 text-left text-nusantara-navy shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <Download />
            <p className="mt-3 text-xl font-bold">Unduh Laporan CSV</p>
            <p className="mt-2 text-sm text-slate-600">Bisa dipakai sebagai bukti demo dan validasi.</p>
          </button>
        </div>

        <MapExplorer />

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-nusantara-navy">Misi Rekomendasi</h2>
              <Link href="/student/explore" className="text-sm font-semibold text-nusantara-blue">Lihat semua</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {missions.slice(0, 4).map((mission) => <MissionCard key={mission.id} mission={mission} />)}
            </div>
          </div>
          <aside className="smooth-card p-5">
            <h2 className="text-2xl font-bold text-nusantara-navy">Progress Level</h2>
            <div className="mt-5">
              <ProgressBar value={progress.xp - currentLevelMinXp} max={300} label={`Level ${level} menuju Level ${level + 1} · ${progressPercentage}% · target ${nextLevel} XP`} />
            </div>
            <h3 className="mt-6 font-bold text-nusantara-navy">Badge Terbaru</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {unlockedBadges.slice(-4).map((badge) => <BadgeCard key={badge.id} badge={badge} />)}
            </div>
            <div className="mt-6 rounded-3xl bg-slate-50 p-4">
              <p className="font-bold text-nusantara-navy">Aksi Demo</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Gunakan reset hanya jika ingin mengulang alur demo dari awal.</p>
              <button onClick={handleReset} className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100">
                <RotateCcw size={16} /> Reset Data Demo
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
