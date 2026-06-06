import { badges } from "@/data/badges";
import { missions } from "@/data/missions";
import { leaderboard as baseLeaderboard } from "@/data/leaderboard";

export type DemoRole = "student" | "teacher";

export type DemoUser = {
  name: string;
  className: string;
  role: DemoRole;
};

export type DemoSimulationResult = {
  id: string;
  simulationId: string;
  simulationTitle: string;
  selectedOptionId: string;
  selectedOptionLabel: string;
  economy: number;
  environment: number;
  social: number;
  sustainability: number;
  totalScore: number;
  grade: string;
  feedback: string;
  recommendation: string;
  createdAt: string;
};

export type DemoChatLog = {
  id: string;
  question: string;
  answer: string;
  topic: string;
  createdAt: string;
};

export type DemoAssessmentResult = {
  type: "pre" | "post";
  score: number;
  total: number;
  percentage: number;
  createdAt: string;
};

export type DemoProgress = {
  user: DemoUser;
  xp: number;
  streak: number;
  completedMissionIds: string[];
  activeMissionId: string;
  simulationResults: DemoSimulationResult[];
  chatLogs: DemoChatLog[];
  assessments: DemoAssessmentResult[];
  lastUpdated: string;
};

export const STORAGE_KEY = "nusantaraverse_demo_progress_v2";

export const defaultProgress: DemoProgress = {
  user: {
    name: "Ghufran",
    className: "XI IPS 2",
    role: "student"
  },
  xp: 1250,
  streak: 7,
  completedMissionIds: [],
  activeMissionId: "misi-rawa-singkil",
  simulationResults: [],
  chatLogs: [],
  assessments: [],
  lastUpdated: new Date().toISOString()
};

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadProgress(): DemoProgress {
  if (!canUseStorage()) return defaultProgress;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
    return defaultProgress;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<DemoProgress>;
    return {
      ...defaultProgress,
      ...parsed,
      user: {
        ...defaultProgress.user,
        ...(parsed.user ?? {})
      },
      completedMissionIds: parsed.completedMissionIds ?? [],
      simulationResults: parsed.simulationResults ?? [],
      chatLogs: parsed.chatLogs ?? [],
      assessments: parsed.assessments ?? []
    };
  } catch {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
    return defaultProgress;
  }
}

export function saveProgress(progress: DemoProgress) {
  if (!canUseStorage()) return progress;
  const next = { ...progress, lastUpdated: new Date().toISOString() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("nusantaraverse-progress-updated"));
  return next;
}

export function updateProgress(updater: (current: DemoProgress) => DemoProgress) {
  const current = loadProgress();
  return saveProgress(updater(current));
}

export function resetProgress() {
  if (!canUseStorage()) return defaultProgress;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
  window.dispatchEvent(new Event("nusantaraverse-progress-updated"));
  return defaultProgress;
}

export function setDemoUser(user: Partial<DemoUser>) {
  return updateProgress((current) => ({
    ...current,
    user: {
      ...current.user,
      ...user
    }
  }));
}

export function completeMission(missionId: string) {
  const mission = missions.find((item) => item.id === missionId);
  return updateProgress((current) => {
    const alreadyCompleted = current.completedMissionIds.includes(missionId);
    const xpReward = alreadyCompleted ? 0 : mission?.xpReward ?? 0;
    return {
      ...current,
      xp: current.xp + xpReward,
      completedMissionIds: alreadyCompleted ? current.completedMissionIds : [...current.completedMissionIds, missionId]
    };
  });
}

export function recordSimulationResult(result: Omit<DemoSimulationResult, "id" | "createdAt">) {
  return updateProgress((current) => {
    const nextResult: DemoSimulationResult = {
      ...result,
      id: `simulation-${Date.now()}`,
      createdAt: new Date().toISOString()
    };

    const withoutOldSameSimulation = current.simulationResults.filter(
      (item) => item.simulationId !== result.simulationId
    );

    return {
      ...current,
      simulationResults: [nextResult, ...withoutOldSameSimulation].slice(0, 20)
    };
  });
}

export function addChatLog(question: string, answer: string, topic = "Eksplorasi") {
  return updateProgress((current) => ({
    ...current,
    chatLogs: [
      {
        id: `chat-${Date.now()}`,
        question,
        answer,
        topic,
        createdAt: new Date().toISOString()
      },
      ...current.chatLogs
    ].slice(0, 50)
  }));
}

export function saveAssessment(result: DemoAssessmentResult) {
  return updateProgress((current) => {
    const filtered = current.assessments.filter((item) => item.type !== result.type);
    const bonusXp = result.type === "post" ? 100 : 40;
    return {
      ...current,
      xp: current.xp + bonusXp,
      assessments: [result, ...filtered]
    };
  });
}

export function getLevelFromXp(xp: number) {
  return Math.max(1, Math.floor(xp / 300) + 1);
}

export function getNextLevelXp(xp: number) {
  const level = getLevelFromXp(xp);
  return level * 300;
}

export function getProgressPercentage(xp: number) {
  const level = getLevelFromXp(xp);
  const min = (level - 1) * 300;
  const max = level * 300;
  return Math.min(100, Math.round(((xp - min) / (max - min)) * 100));
}

export function getUnlockedBadges(xp: number) {
  return badges.filter((badge) => xp >= badge.xpRequired);
}

export function getAverageSimulationScore(progress: DemoProgress) {
  if (progress.simulationResults.length === 0) return 0;
  const total = progress.simulationResults.reduce((sum, item) => sum + item.totalScore, 0);
  return Math.round(total / progress.simulationResults.length);
}

export function getAssessmentByType(progress: DemoProgress, type: "pre" | "post") {
  return progress.assessments.find((item) => item.type === type) ?? null;
}

export function getAssessmentIncrease(progress: DemoProgress) {
  const pre = getAssessmentByType(progress, "pre");
  const post = getAssessmentByType(progress, "post");
  if (!pre || !post) return null;
  return post.percentage - pre.percentage;
}

export function getDynamicLeaderboard(progress: DemoProgress) {
  const userItem = {
    rank: 0,
    name: progress.user.name,
    className: progress.user.className,
    level: getLevelFromXp(progress.xp),
    xp: progress.xp
  };

  return [userItem, ...baseLeaderboard]
    .sort((a, b) => b.xp - a.xp)
    .map((item, index) => ({ ...item, rank: index + 1 }));
}

export function buildTeacherInsight(progress: DemoProgress) {
  const avgSimulation = getAverageSimulationScore(progress);
  const increase = getAssessmentIncrease(progress);
  const chatCount = progress.chatLogs.length;

  if (increase !== null && increase >= 20) {
    return "Hasil post-test menunjukkan peningkatan kuat. Guru dapat melanjutkan ke simulasi lanjutan dan diskusi kelompok berbasis kasus lokal.";
  }

  if (avgSimulation > 0 && avgSimulation < 280) {
    return "Skor simulasi masih perlu ditingkatkan. Disarankan memberi penguatan tentang keseimbangan aspek ekonomi, lingkungan, sosial, dan keberlanjutan.";
  }

  if (chatCount >= 5) {
    return "Interaksi AI Tutor cukup aktif. Guru dapat meninjau pertanyaan siswa untuk mengetahui miskonsepsi dan topik yang perlu dijelaskan ulang.";
  }

  return "Siswa cukup memahami konsep konservasi, tetapi perlu tambahan latihan tentang dampak ekonomi jangka panjang dan partisipasi masyarakat.";
}

export function buildCsvReport(progress: DemoProgress) {
  const rows = [
    ["Nama", progress.user.name],
    ["Kelas", progress.user.className],
    ["XP", String(progress.xp)],
    ["Level", String(getLevelFromXp(progress.xp))],
    ["Misi Selesai", String(progress.completedMissionIds.length)],
    ["Interaksi AI", String(progress.chatLogs.length)],
    ["Rata-rata Simulasi", String(getAverageSimulationScore(progress))],
    ["Pre-test", String(getAssessmentByType(progress, "pre")?.percentage ?? "Belum ada")],
    ["Post-test", String(getAssessmentByType(progress, "post")?.percentage ?? "Belum ada")]
  ];

  const simulationRows = progress.simulationResults.map((item) => [
    item.simulationTitle,
    item.selectedOptionLabel,
    String(item.economy),
    String(item.environment),
    String(item.social),
    String(item.sustainability),
    String(item.totalScore),
    item.grade
  ]);

  return [
    "Ringkasan Nusantaraverse",
    ...rows.map((row) => row.join(",")),
    "",
    "Simulasi,Keputusan,Ekonomi,Lingkungan,Sosial,Keberlanjutan,Total,Grade",
    ...simulationRows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
  ].join("\n");
}
