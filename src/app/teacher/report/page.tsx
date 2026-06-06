"use client";

import Link from "next/link";
import { Download, Printer } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import {
  buildCsvReport,
  buildTeacherInsight,
  getAssessmentByType,
  getAverageSimulationScore,
  getLevelFromXp
} from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";

export default function TeacherReportPage() {
  const { progress } = useDemoProgress();
  const pre = getAssessmentByType(progress, "pre");
  const post = getAssessmentByType(progress, "post");
  const avgSimulation = getAverageSimulationScore(progress);

  function downloadReport() {
    const csv = buildCsvReport(progress);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "laporan-guru-nusantaraverse.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="teacher" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm print:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Laporan Guru</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">Ringkasan Validasi Nusantaraverse</h1>
          <p className="mt-3 text-slate-600">Laporan ini dapat dicetak atau dijadikan bahan proposal, slide, dan video demo.</p>
          <div className="mt-5 flex flex-wrap gap-3 print:hidden">
            <button onClick={downloadReport} className="inline-flex items-center gap-2 rounded-full bg-nusantara-navy px-5 py-3 font-semibold text-white">
              <Download size={18} /> Unduh CSV
            </button>
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-nusantara-navy shadow-sm">
              <Printer size={18} /> Cetak / Save PDF
            </button>
            <Link href="/teacher/dashboard" className="rounded-full bg-white px-5 py-3 font-semibold text-nusantara-navy shadow-sm">Dashboard</Link>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          <ReportBox label="Nama Siswa Demo" value={progress.user.name} />
          <ReportBox label="Kelas" value={progress.user.className} />
          <ReportBox label="XP / Level" value={`${progress.xp} / Level ${getLevelFromXp(progress.xp)}`} />
          <ReportBox label="Misi Selesai" value={String(progress.completedMissionIds.length)} />
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-2">
          <div className="smooth-card p-6">
            <h2 className="text-2xl font-bold text-nusantara-navy">Ringkasan Asesmen</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <p>Pre-test: <b>{pre ? `${pre.score}/${pre.total} (${pre.percentage}%)` : "Belum dikerjakan"}</b></p>
              <p>Post-test: <b>{post ? `${post.score}/${post.total} (${post.percentage}%)` : "Belum dikerjakan"}</b></p>
              <p>Peningkatan: <b>{pre && post ? `${post.percentage - pre.percentage}%` : "Belum dapat dihitung"}</b></p>
              <p>Rata-rata simulasi: <b>{avgSimulation ? `${avgSimulation}/400` : "Belum ada"}</b></p>
              <p>Interaksi AI Tutor: <b>{progress.chatLogs.length}</b></p>
            </div>
          </div>
          <div className="smooth-card p-6">
            <h2 className="text-2xl font-bold text-nusantara-navy">Insight Guru</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">{buildTeacherInsight(progress)}</p>
            <div className="mt-5 rounded-3xl bg-blue-50 p-4 text-sm leading-6 text-slate-700">
              Rekomendasi tindak lanjut: lakukan diskusi kelompok, minta siswa membandingkan dua opsi kebijakan, dan gunakan hasil simulasi sebagai bahan refleksi tertulis.
            </div>
          </div>
        </section>

        <section className="smooth-card mt-6 p-6">
          <h2 className="text-2xl font-bold text-nusantara-navy">Riwayat Simulasi</h2>
          <div className="mt-5 space-y-3">
            {progress.simulationResults.length ? progress.simulationResults.map((item) => (
              <div key={item.id} className="rounded-3xl bg-slate-50 p-4">
                <p className="font-bold text-nusantara-navy">{item.simulationTitle}</p>
                <p className="mt-1 text-sm text-slate-600">Keputusan: {item.selectedOptionLabel}</p>
                <p className="mt-1 text-sm text-slate-600">Skor: Ekonomi {item.economy}, Lingkungan {item.environment}, Sosial {item.social}, Keberlanjutan {item.sustainability}</p>
                <p className="mt-2 text-sm font-semibold text-nusantara-blue">Total {item.totalScore}/400 · {item.grade}</p>
              </div>
            )) : <p className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">Belum ada simulasi tersimpan.</p>}
          </div>
        </section>
      </div>
    </main>
  );
}

function ReportBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="smooth-card p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-nusantara-navy">{value}</p>
    </div>
  );
}
