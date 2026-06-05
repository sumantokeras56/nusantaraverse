export function VirtualScene() {
  return (
    <section className="smooth-card overflow-hidden">
      <div className="relative min-h-[420px] bg-gradient-to-br from-emerald-100 via-sky-100 to-slate-200 p-6">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/40 to-transparent" />
        <div className="absolute left-10 top-12 rounded-3xl bg-white/80 p-4 backdrop-blur">
          <p className="text-sm font-bold text-nusantara-navy">Menjelajahi Rawa Singkil</p>
          <p className="mt-1 max-w-xs text-xs leading-5 text-slate-600">
            Prototype visual interaktif untuk mengenalkan konsep virtual exploration sebelum dikembangkan menjadi 3D penuh.
          </p>
        </div>
        <div className="absolute bottom-16 left-[12%] text-7xl">🌳</div>
        <div className="absolute bottom-20 left-[26%] text-8xl">🌴</div>
        <div className="absolute bottom-16 left-[45%] text-7xl">🛖</div>
        <div className="absolute bottom-20 right-[25%] text-8xl">🦧</div>
        <div className="absolute bottom-16 right-[10%] text-7xl">🌿</div>
        <button className="absolute left-[45%] top-[48%] rounded-full bg-white px-4 py-2 text-sm font-bold text-nusantara-navy shadow-lg">
          ℹ️ Informasi
        </button>
        <button className="absolute right-[26%] top-[46%] rounded-full bg-nusantara-green px-4 py-2 text-sm font-bold text-white shadow-lg">
          Mulai Misi
        </button>
      </div>
    </section>
  );
}
