import Link from "next/link";
import { BarChart3, Bot, ClipboardCheck, Compass, FileDown, Home, LayoutDashboard, Map, RotateCcw, Trophy } from "lucide-react";

export type SidebarRole = "student" | "teacher";

type SidebarProps = {
  role: SidebarRole;
};

export function Sidebar({ role }: SidebarProps) {
  const studentItems = [
    { href: "/student/dashboard", label: "Beranda", icon: Home },
    { href: "/student/explore", label: "Eksplorasi", icon: Map },
    { href: "/student/assessment", label: "Pre/Post Test", icon: ClipboardCheck },
    { href: "/student/ai-tutor", label: "AI Tutor", icon: Bot },
    { href: "/student/progress", label: "Progress", icon: BarChart3 },
    { href: "/student/virtual", label: "Virtual", icon: Compass },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy }
  ];

  const teacherItems = [
    { href: "/teacher/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/teacher/report", label: "Laporan", icon: FileDown },
    { href: "/student/dashboard", label: "Mode Siswa", icon: RotateCcw },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy }
  ];

  const items = role === "student" ? studentItems : teacherItems;

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-white/60 bg-nusantara-navy p-5 text-white lg:block">
      <Link href="/" className="mb-8 flex items-center gap-3 font-bold">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-nusantara-navy">NV</span>
        <span>Nusantaraverse</span>
      </Link>
      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={18} /> {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-8 rounded-3xl bg-white/10 p-4 text-xs leading-5 text-white/70">
        MVP V2: progress, chat, skor, asesmen, dan laporan tersimpan lokal untuk demo stabil tanpa database.
      </div>
    </aside>
  );
}
