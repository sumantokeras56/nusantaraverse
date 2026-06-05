import Link from "next/link";
import { ArrowRight, GraduationCap, UsersRound } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function LoginPage() {
  return (
    <main className="min-h-screen nusantara-gradient">
      <Navbar />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Login Demo</p>
          <h1 className="mt-3 text-4xl font-bold text-nusantara-navy">Pilih role pengguna</h1>
          <p className="mt-4 text-slate-600">
            Untuk MVP, login masih berupa tombol demo. Nanti bisa diganti dengan Supabase Auth atau Firebase Auth.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link href="/student/dashboard" className="smooth-card group p-8 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-nusantara-navy text-white">
              <GraduationCap size={30} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-nusantara-navy">Masuk sebagai Siswa</h2>
            <p className="mt-3 text-slate-600">Jelajahi peta, ikuti misi, tanya AI Tutor, dan selesaikan simulasi keputusan.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-nusantara-blue">
              Buka Dashboard Siswa <ArrowRight size={18} />
            </span>
          </Link>
          <Link href="/teacher/dashboard" className="smooth-card group p-8 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-nusantara-green text-white">
              <UsersRound size={30} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-nusantara-navy">Masuk sebagai Guru</h2>
            <p className="mt-3 text-slate-600">Pantau progress kelas, grafik pemahaman, topik sulit, dan insight pembelajaran.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-nusantara-blue">
              Buka Dashboard Guru <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
