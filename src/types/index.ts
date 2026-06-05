export type UserRole = "student" | "teacher" | "admin";

export type Location = {
  id: string;
  name: string;
  province: string;
  theme: string;
  shortDescription: string;
  description: string;
  imageEmoji: string;
  xp: number;
  coords: {
    x: number;
    y: number;
  };
  facts: string[];
};

export type Mission = {
  id: string;
  locationId: string;
  title: string;
  description: string;
  objectives: string[];
  xpReward: number;
  difficulty: "Mudah" | "Sedang" | "Menantang";
  estimatedTime: string;
};

export type DecisionScores = {
  economy: number;
  environment: number;
  social: number;
  sustainability: number;
};

export type SimulationOption = {
  id: string;
  label: string;
  description: string;
  scores: DecisionScores;
  feedback: string;
  recommendation: string;
};

export type Simulation = {
  id: string;
  missionId: string;
  locationId: string;
  title: string;
  role: string;
  scenario: string;
  options: SimulationOption[];
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  xpRequired: number;
};

export type LeaderboardItem = {
  rank: number;
  name: string;
  className: string;
  level: number;
  xp: number;
};

export type ChatMessage = {
  role: "student" | "ai";
  content: string;
};
