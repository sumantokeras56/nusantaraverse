import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { TeacherChart } from "@/components/TeacherChart";
import { leaderboard } from "@/data/leaderboard";

const topicNeeds = [
  { topic: "Dampak Ekonomi", value: "45%", note: "Perlu penguatan contoh jangka panjang" },
  { topic: "Konservasi", value: "55%", note: "Pemahaman cukup, perlu latihan kasus" },
  { topic: "Partisipasi Masyarakat", value: "60%", note: "Perlu diskusi kelompok" }
];

export default function TeacherDashboardPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="teacher" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Dashboard Guru</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">Analitik Pembelajaran Kelas</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Pantau aktivitas, pemahaman, topik sulit, dan rekomendasi tindak lanjut berbasis data pembelajaran.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <StatCard label="Siswa Aktif" value="32" helper="XI IPS 2" icon="👥" />
          <StatCard label="Penyelesaian Misi" value="78%" helper="Rata-rata kelas" icon="✅" />
          <StatCard label="Pemahaman" value="85%" helper="Post-test rata-rata" icon="📘" />
          <StatCard label="Interaksi AI" value="146" helper="Minggu ini" icon="🤖" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.72fr]">
          <TeacherChart />
          <section className="smooth-card p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Topik Perlu Ditingkatkan</p>
            <h2 className="mt-1 text-2xl font-bold text-nusantara-navy">Prioritas Guru</h2>
            <div className="mt-5 space-y-4">
              {topicNeeds.map((item) => (
                <div key={item.topic} className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-nusantara-navy">{item.topic}</p>
                    <p className="font-bold text-nusantara-blue">{item.value}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-3xl bg-blue-50 p-5">
              <p className="font-bold text-nusantara-navy">AI Insight</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Siswa cukup memahami konsep konservasi, tetapi masih kesulitan memahami dampak ekonomi jangka panjang. Guru disarankan memberi materi tambahan dan simulasi lanjutan.
              </p>
            </div>
          </section>
        </div>

        <section className="smooth-card mt-6 overflow-hidden p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Leaderboard Kelas</p>
              <h2 className="text-2xl font-bold text-nusantara-navy">Progress Siswa</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Nama</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Level</th>
                  <th className="px-4 py-3">XP</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item) => (
                  <tr key={item.rank} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-bold text-nusantara-navy">{item.rank}</td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.className}</td>
                    <td className="px-4 py-3">Level {item.level}</td>
                    <td className="px-4 py-3 font-semibold text-nusantara-blue">{item.xp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
