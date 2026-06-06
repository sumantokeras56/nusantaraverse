import Link from "next/link";

const hotspots = [
  { label: "Habitat Orangutan", icon: "🦧", position: "right-[22%] top-[45%]", text: "Orangutan membutuhkan koridor hutan yang aman." },
  { label: "Lahan Gambut", icon: "🌿", position: "left-[42%] top-[55%]", text: "Gambut menyimpan karbon dan menjaga tata air." },
  { label: "Masyarakat Lokal", icon: "🛖", position: "left-[35%] bottom-[28%]", text: "Kebijakan perlu melibatkan masyarakat sekitar." }
];

export function VirtualScene() {
  return (
    <section className="smooth-card overflow-hidden">
      <div className="relative min-h-[520px] bg-gradient-to-br from-emerald-100 via-sky-100 to-slate-200 p-6">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-900/50 to-transparent" />
        <div className="absolute inset-x-8 top-6 rounded-3xl bg-white/80 p-4 backdrop-blur md:left-8 md:right-auto">
          <p className="text-sm font-bold text-nusantara-navy">Menjelajahi Rawa Singkil</p>
          <p className="mt-1 max-w-xs text-xs leading-5 text-slate-600">
            Prototype virtual exploration: klik hotspot untuk memahami hubungan habitat, gambut, dan masyarakat lokal.
          </p>
        </div>
        <div className="absolute bottom-16 left-[8%] text-7xl">🌳</div>
        <div className="absolute bottom-24 left-[20%] text-8xl">🌴</div>
        <div className="absolute bottom-20 left-[50%] text-7xl">🌳</div>
        <div className="absolute bottom-28 right-[8%] text-8xl">🌴</div>
        <div className="absolute bottom-10 left-0 right-0 mx-auto h-24 w-[78%] rounded-[50%] bg-sky-300/70 blur-sm" />

        {hotspots.map((hotspot) => (
          <div key={hotspot.label} className={`group absolute ${hotspot.position}`}>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-nusantara-navy shadow-lg transition hover:scale-105">
              {hotspot.icon} {hotspot.label}
            </button>
            <div className="pointer-events-none absolute left-0 top-12 hidden w-64 rounded-3xl bg-white p-4 text-sm leading-6 text-slate-600 shadow-xl group-hover:block">
              {hotspot.text}
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
          <Link href="/student/mission/misi-rawa-singkil" className="rounded-full bg-nusantara-green px-5 py-3 text-sm font-bold text-white shadow-lg">
            Mulai Misi
          </Link>
          <Link href="/student/ai-tutor" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-nusantara-navy shadow-lg">
            Tanya AI
          </Link>
        </div>
      </div>
    </section>
  );
}
