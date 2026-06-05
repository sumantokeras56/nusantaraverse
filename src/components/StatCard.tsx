type StatCardProps = {
  label: string;
  value: string;
  helper?: string;
  icon?: string;
};

export function StatCard({ label, value, helper, icon }: StatCardProps) {
  return (
    <div className="smooth-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-nusantara-navy">{value}</p>
          {helper ? <p className="mt-1 text-xs text-slate-500">{helper}</p> : null}
        </div>
        {icon ? <span className="text-3xl">{icon}</span> : null}
      </div>
    </div>
  );
}
