import type { Simulation } from "@/types";

export const simulations: Simulation[] = [
  {
    id: "simulasi-rawa-singkil",
    missionId: "misi-rawa-singkil",
    locationId: "rawa-singkil",
    title: "Studi Kasus Kebijakan Rawa Singkil",
    role: "Pengambil kebijakan daerah",
    scenario:
      "Sebuah perusahaan ingin membuka perkebunan kelapa sawit seluas 5.000 hektare di sekitar kawasan hutan Rawa Singkil. Kawasan tersebut memiliki nilai ekonomi, tetapi juga merupakan habitat penting orangutan dan ekosistem gambut. Sebagai pengambil kebijakan, keputusan apa yang paling tepat?",
    options: [
      {
        id: "approve_all",
        label: "Setujui seluruhnya",
        description:
          "Perusahaan mendapat izin penuh untuk membuka lahan tanpa syarat konservasi tambahan.",
        scores: {
          economy: 90,
          environment: 20,
          social: 45,
          sustainability: 30
        },
        feedback:
          "Keputusan ini meningkatkan potensi ekonomi jangka pendek, tetapi memiliki risiko besar terhadap habitat orangutan, lahan gambut, dan keberlanjutan wilayah.",
        recommendation:
          "Pertimbangkan batas kawasan, AMDAL ketat, zona konservasi, dan konsultasi masyarakat sebelum memberikan izin."
      },
      {
        id: "reject_all",
        label: "Tolak seluruhnya",
        description:
          "Tidak ada pembukaan lahan baru di kawasan tersebut.",
        scores: {
          economy: 30,
          environment: 95,
          social: 60,
          sustainability: 75
        },
        feedback:
          "Keputusan ini sangat kuat untuk perlindungan lingkungan, tetapi perlu solusi ekonomi alternatif agar masyarakat tetap mendapatkan manfaat pembangunan.",
        recommendation:
          "Kembangkan ekowisata, pertanian lokal berkelanjutan, dan program ekonomi hijau untuk masyarakat sekitar."
      },
      {
        id: "conditional_conservation",
        label: "Setujui dengan syarat konservasi",
        description:
          "Izin diberikan secara terbatas dengan zona konservasi, pengawasan, pelibatan masyarakat, dan pemulihan ekosistem.",
        scores: {
          economy: 75,
          environment: 80,
          social: 70,
          sustainability: 85
        },
        feedback:
          "Keputusan ini paling seimbang karena tetap membuka peluang ekonomi, tetapi mensyaratkan konservasi, pengawasan, dan partisipasi masyarakat.",
        recommendation:
          "Pastikan pengawasan berjalan konsisten, data lingkungan dipantau, dan masyarakat dilibatkan dalam evaluasi berkala."
      }
    ]
  },
  {
    id: "simulasi-raja-ampat",
    missionId: "misi-raja-ampat",
    locationId: "raja-ampat",
    title: "Studi Kasus Wisata Bahari Raja Ampat",
    role: "Pengelola kawasan wisata bahari",
    scenario:
      "Jumlah wisatawan meningkat pesat di kawasan terumbu karang. Ekonomi lokal tumbuh, tetapi risiko sampah, kerusakan karang, dan over-tourism ikut meningkat. Kebijakan mana yang paling tepat?",
    options: [
      {
        id: "mass_tourism",
        label: "Buka wisata seluas-luasnya",
        description: "Jumlah wisatawan tidak dibatasi agar pendapatan daerah naik cepat.",
        scores: {
          economy: 92,
          environment: 35,
          social: 55,
          sustainability: 40
        },
        feedback:
          "Pendapatan meningkat, tetapi beban lingkungan terlalu besar dan dapat merusak daya tarik wisata dalam jangka panjang.",
        recommendation: "Tetapkan daya dukung kawasan dan edukasi wisatawan."
      },
      {
        id: "close_area",
        label: "Tutup seluruh area sensitif",
        description: "Kawasan ditutup penuh dari wisatawan untuk pemulihan ekosistem.",
        scores: {
          economy: 40,
          environment: 95,
          social: 58,
          sustainability: 80
        },
        feedback:
          "Kebijakan ini melindungi ekosistem, tetapi perlu strategi ekonomi alternatif bagi pelaku wisata lokal.",
        recommendation: "Buka program restorasi dan pelatihan ekonomi alternatif."
      },
      {
        id: "quota_education",
        label: "Kuota wisata dan edukasi konservasi",
        description:
          "Wisatawan dibatasi berdasarkan daya dukung kawasan dan wajib mengikuti edukasi konservasi.",
        scores: {
          economy: 78,
          environment: 88,
          social: 76,
          sustainability: 90
        },
        feedback:
          "Pilihan ini menjaga ekonomi lokal sekaligus mengurangi tekanan pada ekosistem melalui kuota dan literasi lingkungan.",
        recommendation: "Gunakan sistem reservasi, pengawasan, dan laporan kualitas lingkungan berkala."
      }
    ]
  }
];

export function getSimulationById(id: string) {
  return simulations.find((simulation) => simulation.id === id);
}

export function getSimulationByMissionId(missionId: string) {
  return simulations.find((simulation) => simulation.missionId === missionId);
}
