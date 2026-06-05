"use client";

import { FormEvent, useState } from "react";
import { Bot, Send, UserRound } from "lucide-react";
import { answerTutor, quickQuestions } from "@/lib/ai";
import type { ChatMessage } from "@/types";

export function AITutorBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      content:
        "Halo! Aku AI Explore, pemandu belajarmu. Tanyakan tentang Rawa Singkil, orangutan, konservasi, Raja Ampat, atau Borobudur."
    }
  ]);
  const [question, setQuestion] = useState("");

  function ask(nextQuestion: string) {
    const trimmed = nextQuestion.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "student", content: trimmed },
      { role: "ai", content: answerTutor(trimmed) }
    ]);
    setQuestion("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(question);
  }

  return (
    <div className="smooth-card flex min-h-[620px] flex-col overflow-hidden">
      <div className="flex items-center gap-3 border-b border-slate-100 bg-nusantara-navy p-5 text-white">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
          <Bot />
        </div>
        <div>
          <h2 className="font-bold">AI Explore</h2>
          <p className="text-sm text-white/70">Online · mode fallback lokal</p>
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
  );
}
