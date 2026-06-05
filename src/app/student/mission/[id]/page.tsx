import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Bot, CheckCircle2 } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { getLocationById } from "@/data/locations";
import { getMissionById } from "@/data/missions";
import { getSimulationByMissionId } from "@/data/simulations";

type MissionDetailPageProps = {
  params: {
    id: string;
  };
};

export default function MissionDetailPage({ params }: MissionDetailPageProps) {
  const mission = getMissionById(params.id);

  if (!mission) {
    notFound();
  }

  const location = getLocationById(mission.locationId);
  const simulation = getSimulationByMissionId(mission.id);

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="grid gap-6 xl:grid-cols-[1fr_0.42fr]">
          <section className="smooth-card overflow-hidden">
            <div className="bg-gradient-to-br from-nusantara-navy to-nusantara-green p-8 text-white">
              <div className="text-7xl">{location?.imageEmoji ?? "🌏"}</div>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/60">{location?.province}</p>
              <h1 className="mt-2 text-4xl font-bold">{mission.title}</h1>
              <p className="mt-4 max-w-3xl text-white/80">{mission.description}</p>
            </div>
            <div className="p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">XP Reward</p>
                  <p className="mt-1 text-2xl font-bold text-nusantara-navy">+{mission.xpReward}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Tingkat</p>
                  <p className="mt-1 text-2xl font-bold text-nusantara-navy">{mission.difficulty}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Estimasi</p>
                  <p className="mt-1 text-2xl font-bold text-nusantara-navy">{mission.estimatedTime}</p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-blue-50 p-5">
                <h2 className="text-xl font-bold text-nusantara-navy">Ringkasan Materi</h2>
                <p className="mt-3 leading-7 text-slate-700">{location?.description}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold text-nusantara-navy">Tujuan Pembelajaran</h2>
                <ul className="mt-3 space-y-3">
                  {mission.objectives.map((objective) => (
                    <li key={objective} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-slate-700">
                      <CheckCircle2 className="shrink-0 text-nusantara-green" size={20} /> {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <Link href="/student/ai-tutor" className="smooth-card block p-5 hover:shadow-xl">
              <Bot className="text-nusantara-blue" />
              <h3 className="mt-4 text-xl font-bold text-nusantara-navy">Tanya AI Explore</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Gunakan AI Tutor untuk memahami materi sebelum simulasi.</p>
            </Link>
            {simulation ? (
              <Link href={`/student/simulation/${simulation.id}`} className="block rounded-3xl bg-nusantara-navy p-5 text-white hover:bg-slate-800">
                <h3 className="text-xl font-bold">Mulai Simulasi</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">Ambil keputusan dan lihat dampaknya.</p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold">Buka Simulasi <ArrowRight size={18} /></span>
              </Link>
            ) : (
              <div className="smooth-card p-5 text-sm text-slate-600">Simulasi untuk misi ini sedang disiapkan.</div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
