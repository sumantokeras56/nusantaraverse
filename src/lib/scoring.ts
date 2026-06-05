import { getSimulationById } from "@/data/simulations";
import type { SimulationOption } from "@/types";

export type DecisionResult = {
  option: SimulationOption;
  totalScore: number;
  maxScore: number;
  grade: string;
};

export function calculateDecisionScore(simulationId: string, optionId: string): DecisionResult | null {
  const simulation = getSimulationById(simulationId);
  const option = simulation?.options.find((item) => item.id === optionId);

  if (!option) {
    return null;
  }

  const totalScore =
    option.scores.economy +
    option.scores.environment +
    option.scores.social +
    option.scores.sustainability;

  return {
    option,
    totalScore,
    maxScore: 400,
    grade: getGrade(totalScore)
  };
}

function getGrade(totalScore: number) {
  if (totalScore >= 330) return "Sangat Seimbang";
  if (totalScore >= 260) return "Cukup Seimbang";
  if (totalScore >= 200) return "Perlu Perbaikan";
  return "Risiko Tinggi";
}
