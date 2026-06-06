import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { VirtualScene } from "@/components/VirtualScene";

export default function StudentVirtualPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Eksplorasi Virtual</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">Menjelajahi Rawa Singkil</h1>
          <p className="mt-3 max-w-3xl text-slate-600">Prototype visual ringan untuk menunjukkan konsep eksplorasi 3D/virtual tanpa membuat aplikasi berat.</p>
        </div>
        <VirtualScene />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/student/mission/misi-rawa-singkil" className="inline-flex items-center gap-2 rounded-full bg-nusantara-navy px-6 py-3 font-semibold text-white">
            Lanjut ke Misi <ArrowRight size={18} />
          </Link>
          <Link href="/student/dashboard" className="rounded-full bg-white px-6 py-3 font-semibold text-nusantara-navy shadow-sm">Dashboard</Link>
        </div>
      </div>
    </main>
  );
}
