import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { MapExplorer } from "@/components/MapExplorer";
import { MissionCard } from "@/components/MissionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { BadgeCard } from "@/components/BadgeCard";
import { StatCard } from "@/components/StatCard";
import { badges } from "@/data/badges";
import { missions } from "@/data/missions";

export default function StudentDashboardPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 flex flex-col gap-4 rounded-[2rem] bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Selamat datang, Ghufran!</p>
            <h1 className="mt-1 text-3xl font-bold text-nusantara-navy">Siap menjelajahi Indonesia hari ini?</h1>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-2xl bg-slate-100 px-4 py-3"><b>1.250</b><br />XP</div>
            <div className="rounded-2xl bg-slate-100 px-4 py-3"><b>Level 5</b><br />Siswa</div>
            <div className="rounded-2xl bg-slate-100 px-4 py-3"><b>7 Hari</b><br />Streak</div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <StatCard label="Misi Selesai" value="8" helper="Dari 12 misi aktif" icon="✅" />
          <StatCard label="Pemahaman" value="85%" helper="Rata-rata post-test" icon="📘" />
          <StatCard label="Badge" value="3" helper="Badge terbaru terbuka" icon="🏅" />
        </div>

        <MapExplorer />

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-nusantara-navy">Misi Rekomendasi</h2>
              <Link href="/student/explore" className="text-sm font-semibold text-nusantara-blue">Lihat semua</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {missions.slice(0, 2).map((mission) => <MissionCard key={mission.id} mission={mission} />)}
            </div>
          </div>
          <aside className="smooth-card p-5">
            <h2 className="text-2xl font-bold text-nusantara-navy">Progress Level</h2>
            <div className="mt-5">
              <ProgressBar value={1250} max={2000} label="Level 5 menuju Level 6" />
            </div>
            <h3 className="mt-6 font-bold text-nusantara-navy">Badge Terbaru</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {badges.slice(0, 4).map((badge, index) => <BadgeCard key={badge.id} badge={badge} unlocked={index < 3} />)}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
