import { Sidebar } from "@/components/Sidebar";
import { MapExplorer } from "@/components/MapExplorer";
import { MissionCard } from "@/components/MissionCard";
import { VirtualScene } from "@/components/VirtualScene";
import { missions } from "@/data/missions";

export default function ExplorePage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Eksplorasi</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">Peta, misi, dan eksplorasi virtual</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Halaman ini menampilkan modul eksplorasi utama untuk siswa. Versi MVP memakai visual ringan agar mudah didemokan dan stabil saat presentasi.
          </p>
        </div>
        <MapExplorer />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
        </div>
        <div className="mt-8">
          <VirtualScene />
        </div>
      </div>
    </main>
  );
}
