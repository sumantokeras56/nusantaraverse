import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { MapExplorer } from "@/components/MapExplorer";
import { MissionCard } from "@/components/MissionCard";
import { missions } from "@/data/missions";

export default function ExplorePage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Eksplorasi</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">Peta dan Misi Pembelajaran Indonesia</h1>
          <p className="mt-3 max-w-3xl text-slate-600">Pilih lokasi, buka misi, tanya AI Tutor, lalu selesaikan simulasi keputusan.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/student/virtual" className="rounded-full bg-nusantara-navy px-5 py-3 text-sm font-semibold text-white">Buka Eksplorasi Virtual</Link>
            <Link href="/student/assessment" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-nusantara-navy shadow-sm">Pre/Post Test</Link>
          </div>
        </div>
        <MapExplorer />
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-nusantara-navy">Semua Misi</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {missions.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
          </div>
        </section>
      </div>
    </main>
  );
}
