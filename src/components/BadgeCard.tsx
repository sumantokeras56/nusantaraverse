import type { Badge } from "@/types";

type BadgeCardProps = {
  badge: Badge;
  unlocked?: boolean;
};

export function BadgeCard({ badge, unlocked = true }: BadgeCardProps) {
  return (
    <div className={`rounded-3xl border p-4 text-center ${unlocked ? "border-emerald-100 bg-emerald-50" : "border-slate-200 bg-slate-50 opacity-60"}`}>
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-3xl shadow-sm">
        {badge.icon}
      </div>
      <h3 className="mt-3 text-sm font-bold text-nusantara-navy">{badge.name}</h3>
      <p className="mt-1 text-xs leading-5 text-slate-500">{badge.description}</p>
      <p className="mt-2 text-xs font-semibold text-emerald-700">{badge.xpRequired} XP</p>
    </div>
  );
}
