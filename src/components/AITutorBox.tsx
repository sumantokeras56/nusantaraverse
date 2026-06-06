"use client";

import { FormEvent, useMemo, useState } from "react";
import { Bot, Download, Send, Trash2, UserRound } from "lucide-react";
import { answerTutor, quickQuestions } from "@/lib/ai";
import { addChatLog } from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";
import type { ChatMessage } from "@/types";

export function AITutorBox() {
  const { progress, refresh, update } = useDemoProgress();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      content:
        "Halo! Aku AI Explore, pemandu belajarmu. Tanyakan tentang Rawa Singkil, orangutan, konservasi, Raja Ampat, Borobudur, Bali, Kalimantan, Aceh, atau Merauke."
    }
  ]);
  const [question, setQuestion] = useState("");

  const recentLogs = useMemo(() => progress.chatLogs.slice(0, 5), [progress.chatLogs]);

  function ask(nextQuestion: string) {
    const trimmed = nextQuestion.trim();
    if (!trimmed) return;

    const answer = answerTutor(trimmed);
    setMessages((current) => [
      ...current,
      { role: "student", content: trimmed },
      { role: "ai", content: answer }
    ]);
    addChatLog(trimmed, answer, detectTopic(trimmed));
    refresh();
    setQuestion("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(question);
  }

  function clearChatLogs() {
    update({ ...progress, chatLogs: [] });
    setMessages([
      {
        role: "ai",
        content: "Riwayat chat sudah dibersihkan. Silakan ajukan pertanyaan baru."
      }
    ]);
  }

  function downloadLogs() {
    const text = progress.chatLogs
      .map((log) => `[${new Date(log.createdAt).toLocaleString("id-ID")}] ${log.topic}\nQ: ${log.question}\nA: ${log.answer}`)
      .join("\n\n");
    const blob = new Blob([text || "Belum ada riwayat chat."], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "riwayat-ai-tutor-nusantaraverse.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.45fr]">
      <div className="smooth-card flex min-h-[680px] flex-col overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-nusantara-navy p-5 text-white">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
            <Bot />
          </div>
          <div>
            <h2 className="font-bold">AI Explore</h2>
            <p className="text-sm text-white/70">Online · fallback lokal aman demo · riwayat tersimpan</p>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-auto bg-gradient-to-b from-slate-50 to-white p-5">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex gap-3 ${message.role === "student" ? "justify-end" : "justify-start"}`}>
              {message.role === "ai" ? (
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-nusantara-navy text-white">
                  <Bot size={18} />
                </div>
              ) : null}
              <div
                className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                  message.role === "student" ? "bg-nusantara-blue text-white" : "bg-white text-slate-700 shadow-sm"
                }`}
              >
                {message.content}
              </div>
              {message.role === "student" ? (
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-200 text-slate-600">
                  <UserRound size={18} />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 p-5">
          <div className="mb-4 grid gap-2 sm:grid-cols-2">
            {quickQuestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => ask(item)}
                className="rounded-2xl bg-slate-100 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-nusantara-sky"
              >
                {item}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ketik pertanyaanmu..."
              className="min-w-0 flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-nusantara-blue"
            />
            <button className="grid h-12 w-12 place-items-center rounded-2xl bg-nusantara-navy text-white hover:bg-slate-800" type="submit" aria-label="Kirim">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <aside className="space-y-5">
        <section className="smooth-card p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Riwayat AI</p>
          <h3 className="mt-1 text-2xl font-bold text-nusantara-navy">{progress.chatLogs.length} interaksi</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Riwayat ini dipakai di dashboard guru sebagai indikator keaktifan siswa.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={downloadLogs} className="inline-flex items-center gap-2 rounded-full bg-nusantara-navy px-4 py-2 text-sm font-semibold text-white">
              <Download size={16} /> Unduh
            </button>
            <button onClick={clearChatLogs} className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              <Trash2 size={16} /> Bersihkan
            </button>
          </div>
        </section>

        <section className="smooth-card p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Log Terbaru</p>
          <div className="mt-4 space-y-3">
            {recentLogs.length ? recentLogs.map((log) => (
              <div key={log.id} className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{log.topic}</p>
                <p className="mt-2 text-sm font-bold text-nusantara-navy">{log.question}</p>
                <p className="mt-1 line-clamp-3 text-sm leading-6 text-slate-600">{log.answer}</p>
              </div>
            )) : (
              <p className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">Belum ada pertanyaan tersimpan.</p>
            )}
          </div>
        </section>
      </aside>
    </div>
  );
}

function detectTopic(question: string) {
  const value = question.toLowerCase();
  if (value.includes("orangutan") || value.includes("rawa") || value.includes("gambut")) return "Rawa Singkil";
  if (value.includes("raja") || value.includes("karang") || value.includes("laut")) return "Raja Ampat";
  if (value.includes("borobudur") || value.includes("sejarah") || value.includes("budaya")) return "Budaya dan Sejarah";
  if (value.includes("bali") || value.includes("wisata")) return "Pariwisata";
  if (value.includes("kalimantan") || value.includes("hutan")) return "Hutan Tropis";
  if (value.includes("aceh") || value.includes("tsunami") || value.includes("bencana")) return "Mitigasi Bencana";
  if (value.includes("merauke") || value.includes("pangan")) return "Pangan Lokal";
  return "Eksplorasi";
}
