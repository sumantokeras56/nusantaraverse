"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { getDynamicLeaderboard } from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";

export default function LeaderboardPage() {
  const { progress } = useDemoProgress();
  const leaderboard = getDynamicLeaderboard(progress);

  return (
    <main className="min-h-screen nusantara-gradient">
      <Navbar />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="smooth-card overflow-hidden">
          <div className="bg-nusantara-navy p-8 text-white">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-white/15">
              <Trophy size={34} />
            </div>
            <h1 className="mt-5 text-4xl font-bold">Leaderboard Nusantaraverse</h1>
            <p className="mt-3 text-white/70">Peringkat dinamis berdasarkan XP demo siswa dan data contoh kelas.</p>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {leaderboard.map((item) => (
                <div key={`${item.rank}-${item.name}`} className={`flex items-center justify-between rounded-3xl p-4 ${item.name === progress.user.name ? "bg-emerald-50 ring-2 ring-emerald-200" : "bg-slate-50"}`}>
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-lg font-bold text-nusantara-navy shadow-sm">
                      {item.rank}
                    </div>
                    <div>
                      <p className="font-bold text-nusantara-navy">{item.name} {item.name === progress.user.name ? "· Kamu" : ""}</p>
                      <p className="text-sm text-slate-500">{item.className} · Level {item.level}</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-nusantara-blue">{item.xp} XP</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/student/dashboard" className="rounded-full bg-nusantara-navy px-5 py-3 font-semibold text-white">Kembali ke Siswa</Link>
              <Link href="/teacher/dashboard" className="rounded-full bg-white px-5 py-3 font-semibold text-nusantara-navy shadow-sm">Dashboard Guru</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
