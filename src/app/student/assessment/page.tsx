"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { assessmentQuestions } from "@/data/assessments";
import { getAssessmentByType, saveAssessment } from "@/lib/demoStore";
import { useDemoProgress } from "@/hooks/useDemoProgress";

export default function AssessmentPage() {
  const { progress, refresh } = useDemoProgress();
  const [type, setType] = useState<"pre" | "post">("pre");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const existingPre = getAssessmentByType(progress, "pre");
  const existingPost = getAssessmentByType(progress, "post");

  const score = useMemo(() => {
    return assessmentQuestions.reduce((total, question) => {
      return total + (answers[question.id] === question.answerIndex ? 1 : 0);
    }, 0);
  }, [answers]);

  const percentage = Math.round((score / assessmentQuestions.length) * 100);
  const isComplete = assessmentQuestions.every((question) => answers[question.id] !== undefined);

  function submitAssessment() {
    if (!isComplete) return;
    saveAssessment({
      type,
      score,
      total: assessmentQuestions.length,
      percentage,
      createdAt: new Date().toISOString()
    });
    setSubmitted(true);
    refresh();
  }

  function switchType(nextType: "pre" | "post") {
    setType(nextType);
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <div className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Asesmen Pembelajaran</p>
          <h1 className="mt-2 text-3xl font-bold text-nusantara-navy">Pre-Test dan Post-Test Nusantaraverse</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Fitur ini membantu membuktikan dampak pembelajaran. Gunakan pre-test sebelum eksplorasi dan post-test setelah menyelesaikan misi/simulasi.
          </p>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <button
            onClick={() => switchType("pre")}
            className={`rounded-3xl p-5 text-left shadow-sm ${type === "pre" ? "bg-nusantara-navy text-white" : "bg-white text-nusantara-navy"}`}
          >
            <ClipboardCheck />
            <p className="mt-3 text-xl font-bold">Pre-Test</p>
            <p className="mt-2 text-sm opacity-75">{existingPre ? `Tersimpan: ${existingPre.percentage}%` : "Belum dikerjakan"}</p>
          </button>
          <button
            onClick={() => switchType("post")}
            className={`rounded-3xl p-5 text-left shadow-sm ${type === "post" ? "bg-nusantara-green text-white" : "bg-white text-nusantara-navy"}`}
          >
            <CheckCircle2 />
            <p className="mt-3 text-xl font-bold">Post-Test</p>
            <p className="mt-2 text-sm opacity-75">{existingPost ? `Tersimpan: ${existingPost.percentage}%` : "Belum dikerjakan"}</p>
          </button>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Skor saat ini</p>
            <p className="mt-2 text-3xl font-bold text-nusantara-navy">{score}/{assessmentQuestions.length}</p>
            <p className="mt-1 text-sm text-slate-600">{percentage}% · {isComplete ? "Siap submit" : "Lengkapi semua soal"}</p>
          </div>
        </div>

        {submitted ? (
          <div className="mb-6 rounded-3xl bg-emerald-50 p-5 text-emerald-800">
            <p className="font-bold">Hasil {type === "pre" ? "Pre-Test" : "Post-Test"} tersimpan: {percentage}%</p>
            <p className="mt-1 text-sm">Data ini akan muncul pada dashboard guru dan laporan progress.</p>
          </div>
        ) : null}

        <section className="space-y-4">
          {assessmentQuestions.map((question, index) => (
            <article key={question.id} className="smooth-card p-5">
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-nusantara-sky font-bold text-nusantara-navy">{index + 1}</div>
                <div className="flex-1">
                  <h2 className="font-bold text-nusantara-navy">{question.question}</h2>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {question.options.map((option, optionIndex) => (
                      <label
                        key={option}
                        className={`cursor-pointer rounded-2xl border p-4 text-sm transition hover:border-nusantara-blue ${
                          answers[question.id] === optionIndex ? "border-nusantara-green bg-emerald-50" : "border-slate-200 bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          className="mr-2"
                          checked={answers[question.id] === optionIndex}
                          onChange={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {submitted ? (
                    <p className={`mt-3 rounded-2xl p-3 text-sm ${answers[question.id] === question.answerIndex ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
                      {answers[question.id] === question.answerIndex ? "Benar." : "Belum tepat."} {question.explanation}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={submitAssessment}
            disabled={!isComplete}
            className="inline-flex items-center gap-2 rounded-full bg-nusantara-navy px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Simpan Hasil {type === "pre" ? "Pre-Test" : "Post-Test"} <ArrowRight size={18} />
          </button>
          <Link href="/student/dashboard" className="rounded-full bg-white px-6 py-3 font-semibold text-nusantara-navy shadow-sm">
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
