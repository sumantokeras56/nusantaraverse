import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import type { Mission } from "@/types";
import { getLocationById } from "@/data/locations";

type MissionCardProps = {
  mission: Mission;
};

export function MissionCard({ mission }: MissionCardProps) {
  const location = getLocationById(mission.locationId);

  return (
    <article className="smooth-card overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-28 items-center gap-4 bg-gradient-to-br from-nusantara-navy to-nusantara-green p-5 text-white">
        <span className="text-5xl">{location?.imageEmoji ?? "🌏"}</span>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">{location?.province}</p>
          <h3 className="text-lg font-bold leading-tight">{mission.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-6 text-slate-600">{mission.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-nusantara-blue">
            <Sparkles size={14} /> +{mission.xpReward} XP
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
            <Clock size={14} /> {mission.estimatedTime}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{mission.difficulty}</span>
        </div>
        <Link
          href={`/student/mission/${mission.id}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-nusantara-navy px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Mulai Misi <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
