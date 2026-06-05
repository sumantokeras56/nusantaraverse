import { notFound } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { SimulationRunner } from "@/components/SimulationRunner";
import { getSimulationById } from "@/data/simulations";

type SimulationPageProps = {
  params: {
    id: string;
  };
};

export default function SimulationPage({ params }: SimulationPageProps) {
  const simulation = getSimulationById(params.id);

  if (!simulation) {
    notFound();
  }

  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar role="student" />
      <div className="min-w-0 flex-1 p-4 lg:p-8">
        <SimulationRunner simulation={simulation} />
      </div>
    </main>
  );
}
