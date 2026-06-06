"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, GraduationCap, RotateCcw, UsersRound } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { resetProgress, setDemoUser } from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";

export default function LoginPage() {
  const router = useRouter();
  const { progress, reset, refresh } = useDemoProgress();

  function loginAs(role: "student" | "teacher") {
    setDemoUser({ role, name: role === "student" ? "Ghufran" : "Bu Rani", className: "XI IPS 2" });
    refresh();
    router.push(role === "student" ? "/student/dashboard" : "/teacher/dashboard");
  }

  function handleReset() {
    resetProgress();
    reset();
  }

  return (
    <main className="min-h-screen nusantara-gradient">
      <Navbar />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Login Demo</p>
          <h1 className="mt-3 text-4xl font-bold text-nusantara-navy">Pilih role pengguna</h1>
          <p className="mt-4 text-slate-600">
            Versi ini sudah menyimpan XP, misi, skor simulasi, chat AI, dan hasil tes di browser menggunakan localStorage.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <button onClick={() => loginAs("student")} className="smooth-card group p-8 text-left transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-nusantara-navy text-white">
              <GraduationCap size={30} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-nusantara-navy">Masuk sebagai Siswa</h2>
            <p className="mt-3 text-slate-600">Jelajahi peta, ikuti misi, tanya AI Tutor, kerjakan asesmen, dan selesaikan simulasi keputusan.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-nusantara-blue">
              Buka Dashboard Siswa <ArrowRight size={18} />
            </span>
          </button>

          <button onClick={() => loginAs("teacher")} className="smooth-card group p-8 text-left transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-nusantara-green text-white">
              <UsersRound size={30} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-nusantara-navy">Masuk sebagai Guru</h2>
            <p className="mt-3 text-slate-600">Pantau progress kelas, grafik pemahaman, topik sulit, interaksi AI, dan unduh laporan demo.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-nusantara-blue">
              Buka Dashboard Guru <ArrowRight size={18} />
            </span>
          </button>
        </div>

        <div className="mt-8 smooth-card p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-bold text-nusantara-navy">Status data demo saat ini</p>
              <p className="mt-1 text-sm text-slate-600">
                User: {progress.user.name} · XP: {progress.xp} · Misi selesai: {progress.completedMissionIds.length} · Chat AI: {progress.chatLogs.length}
              </p>
            </div>
            <button onClick={handleReset} className="inline-flex items-center justify-center gap-2 rounded-full bg-red-50 px-5 py-3 font-semibold text-red-700 hover:bg-red-100">
              <RotateCcw size={18} /> Reset Data Demo
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          <Link href="/" className="font-semibold text-nusantara-blue hover:underline">Kembali ke landing page</Link>
        </div>
      </section>
    </main>
  );
}
