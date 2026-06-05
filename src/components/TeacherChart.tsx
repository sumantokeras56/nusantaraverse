"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Aulia", score: 90 },
  { name: "Ghufran", score: 82 },
  { name: "Nabila", score: 76 },
  { name: "Rafi", score: 74 },
  { name: "Dinda", score: 88 },
  { name: "Aqil", score: 68 }
];

export function TeacherChart() {
  return (
    <div className="smooth-card p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Perkembangan Siswa</p>
        <h2 className="text-2xl font-bold text-nusantara-navy">Skor Pemahaman</h2>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
