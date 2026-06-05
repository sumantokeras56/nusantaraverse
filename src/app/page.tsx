import Link from "next/link";
import { ArrowRight, Bot, ChartBar, Compass, Gamepad2, Map, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const features = [
  {
    title: "Peta Eksplorasi",
    description: "Siswa menjelajahi lokasi Indonesia melalui marker interaktif dan misi berbasis topik.",
    icon: Map
  },
  {
    title: "AI Tutor",
    description: "AI Explore menjawab pertanyaan siswa berdasarkan materi lokal yang sudah disiapkan.",
    icon: Bot
  },
  {
    title: "Simulasi Keputusan",
    description: "Siswa mengambil kebijakan dan melihat dampaknya pada ekonomi, lingkungan, sosial, dan keberlanjutan.",
    icon: Compass
  },
  {
    title: "Gamifikasi",
    description: "XP, level, badge, dan leaderboard meningkatkan motivasi belajar siswa.",
    icon: Gamepad2
  },
  {
    title: "Dashboard Guru",
    description: "Guru melihat perkembangan siswa, topik sulit, dan rekomendasi tindak lanjut.",
    icon: ChartBar
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen nusantara-gradient">
      <Navbar />
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-nusantara-blue shadow-sm">
            <Sparkles size={16} /> LIDM 2026 · Inovasi Teknologi Digital Pendidikan
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-nusantara-navy sm:text-6xl">
            Belajar Indonesia, Menjelajahi Indonesia.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Nusantaraverse adalah platform pembelajaran digital berbasis eksplorasi Indonesia yang menggabungkan AI Tutor, simulasi keputusan, gamifikasi, dan analitik pembelajaran.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/student/dashboard" className="inline-flex items-center justify-center gap-2 rounded-full bg-nusantara-navy px-6 py-3 font-semibold text-white hover:bg-slate-800">
              Mulai Demo Siswa <ArrowRight size={18} />
            </Link>
            <Link href="/teacher/dashboard" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-nusantara-navy shadow-sm hover:bg-slate-50">
              Lihat Dashboard Guru
            </Link>
          </div>
        </div>
        <div className="smooth-card p-4">
          <div className="rounded-[2rem] bg-gradient-to-br from-nusantara-navy to-nusantara-green p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Prototype Preview</p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl bg-white/15 p-5">
                <p className="text-sm text-white/70">Misi Rekomendasi</p>
                <h3 className="mt-1 text-2xl font-bold">Konservasi Orangutan di Rawa Singkil</h3>
                <p className="mt-3 text-sm text-white/75">+200 XP · Simulasi Keputusan · AI Feedback</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-3xl font-bold">7</p>
                  <p className="text-xs text-white/70">Lokasi</p>
                </div>
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-xs text-white/70">Badge</p>
                </div>
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-3xl font-bold">4</p>
                  <p className="text-xs text-white/70">Aspek Skor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="smooth-card p-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-nusantara-sky text-nusantara-navy">
                  <Icon />
                </div>
                <h2 className="mt-4 font-bold text-nusantara-navy">{feature.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
