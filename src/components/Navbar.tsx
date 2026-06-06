import Link from "next/link";
import { ClipboardCheck, Compass, GraduationCap, LayoutDashboard, Trophy } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-bold text-nusantara-navy">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-nusantara-navy text-white">NV</span>
          <span className="text-xl">Nusantaraverse</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
          <Link href="/student/dashboard" className="flex items-center gap-2 hover:text-nusantara-blue">
            <Compass size={17} /> Siswa
          </Link>
          <Link href="/student/assessment" className="flex items-center gap-2 hover:text-nusantara-blue">
            <ClipboardCheck size={17} /> Tes
          </Link>
          <Link href="/teacher/dashboard" className="flex items-center gap-2 hover:text-nusantara-blue">
            <LayoutDashboard size={17} /> Guru
          </Link>
          <Link href="/leaderboard" className="flex items-center gap-2 hover:text-nusantara-blue">
            <Trophy size={17} /> Leaderboard
          </Link>
          <Link href="/login" className="rounded-full bg-nusantara-navy px-4 py-2 text-white hover:bg-slate-800">
            Masuk Demo
          </Link>
        </nav>
        <Link href="/login" className="rounded-full bg-nusantara-navy px-4 py-2 text-sm font-semibold text-white md:hidden">
          Masuk
        </Link>
      </div>
    </header>
  );
}
