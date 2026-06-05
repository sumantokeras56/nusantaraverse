import { Sidebar } from "@/components/Sidebar";
import { AITutorBox } from "@/components/AITutorBox";

export default function AITutorPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">AI Tutor</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">AI Explore</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Mode saat ini memakai jawaban lokal berbasis materi agar tetap aman saat demo tanpa koneksi API. Integrasi AI API dapat ditambahkan setelah MVP stabil.
          </p>
        </div>
        <AITutorBox />
      </div>
    </main>
  );
}
