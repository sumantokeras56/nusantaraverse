"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { locations } from "@/data/locations";
import { getMissionByLocationId } from "@/data/missions";

export function MapExplorer() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(locations[0].id);

  const filteredLocations = useMemo(() => {
    const normalized = query.toLowerCase();
    if (!normalized) return locations;
    return locations.filter((location) =>
      [location.name, location.province, location.theme]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  const selected = locations.find((location) => location.id === selectedId) ?? locations[0];
  const selectedMission = getMissionByLocationId(selected.id);

  return (
    <div className="grid gap-6 xl:grid-cols-[1.55fr_0.75fr]">
      <section className="smooth-card overflow-hidden p-5">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Peta Eksplorasi</p>
            <h2 className="text-2xl font-bold text-nusantara-navy">Jelajahi Indonesia</h2>
          </div>
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
            <Search size={17} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari daerah atau topik..."
              className="w-56 border-0 bg-transparent outline-none"
            />
          </label>
        </div>
        <div className="map-gradient relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white">
          <div className="absolute inset-x-8 top-10 rounded-full bg-white/40 px-6 py-3 text-sm font-medium text-nusantara-navy shadow-sm">
            Klik marker untuk melihat misi pembelajaran.
          </div>
          {filteredLocations.map((location) => (
            <button
              key={location.id}
              type="button"
              onClick={() => setSelectedId(location.id)}
              className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full px-3 py-2 text-xs font-bold shadow-lg transition hover:scale-105 ${
                selectedId === location.id ? "bg-nusantara-navy text-white" : "bg-white text-nusantara-navy"
              }`}
              style={{ left: `${location.coords.x}%`, top: `${location.coords.y}%` }}
            >
              <MapPin size={15} /> {location.name}
            </button>
          ))}
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/80 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nusantara-blue">Virtual Indonesia Map</p>
            <p className="mt-1 text-sm text-slate-600">
              Prototype ini memakai peta visual sederhana agar ringan untuk MVP. Versi lanjutan dapat memakai Leaflet atau Mapbox.
            </p>
          </div>
        </div>
      </section>

      <aside className="smooth-card p-5">
        <div className="rounded-[2rem] bg-gradient-to-br from-nusantara-navy to-nusantara-green p-5 text-white">
          <div className="text-6xl">{selected.imageEmoji}</div>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/70">{selected.province}</p>
          <h3 className="mt-1 text-2xl font-bold">{selected.name}</h3>
          <p className="mt-3 text-sm leading-6 text-white/80">{selected.shortDescription}</p>
        </div>
        <div className="mt-5 space-y-4">
          <div>
            <p className="text-sm font-bold text-nusantara-navy">Topik</p>
            <p className="text-sm text-slate-600">{selected.theme}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-nusantara-navy">Fakta Cepat</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              {selected.facts.slice(0, 2).map((fact) => (
                <li key={fact} className="rounded-2xl bg-slate-50 p-3">{fact}</li>
              ))}
            </ul>
          </div>
          {selectedMission ? (
            <Link
              href={`/student/mission/${selectedMission.id}`}
              className="block rounded-2xl bg-nusantara-navy px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
            >
              Mulai Misi +{selectedMission.xpReward} XP
            </Link>
          ) : (
            <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">Misi untuk lokasi ini sedang disiapkan.</p>
          )}
        </div>
      </aside>
    </div>
  );
}
