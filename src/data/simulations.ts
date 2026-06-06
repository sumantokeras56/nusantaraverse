import type { Simulation } from "@/types";

export const simulations: Simulation[] = [
  {
    id: "simulasi-aceh",
    missionId: "misi-aceh",
    locationId: "aceh",
    title: "Studi Kasus Mitigasi Tsunami Aceh",
    role: "Koordinator edukasi kebencanaan sekolah",
    scenario: "Sekolah di wilayah pesisir memiliki keterbatasan waktu belajar. Guru perlu memilih strategi mitigasi tsunami yang efektif tanpa mengganggu kegiatan akademik utama. Kebijakan mana yang paling tepat?",
    options: [
      {
        id: "poster_only",
        label: "Hanya memasang poster evakuasi",
        description: "Sekolah memasang poster jalur evakuasi tanpa latihan berkala.",
        scores: { economy: 80, environment: 70, social: 45, sustainability: 45 },
        feedback: "Biaya rendah, tetapi kesiapsiagaan siswa belum cukup karena tidak ada latihan nyata.",
        recommendation: "Tambahkan simulasi berkala dan evaluasi pemahaman siswa."
      },
      {
        id: "routine_drill",
        label: "Latihan evakuasi dan edukasi berkala",
        description: "Sekolah membuat jadwal latihan, materi digital, dan peta evakuasi yang dipahami semua siswa.",
        scores: { economy: 75, environment: 80, social: 90, sustainability: 88 },
        feedback: "Pilihan ini seimbang karena membangun budaya tanggap bencana dan dapat dijalankan berkelanjutan.",
        recommendation: "Libatkan BPBD, orang tua, dan komunitas sekitar agar dampaknya lebih luas."
      },
      {
        id: "one_time_event",
        label: "Seminar besar satu kali",
        description: "Sekolah membuat satu acara besar, tetapi tidak ada tindak lanjut.",
        scores: { economy: 55, environment: 70, social: 65, sustainability: 50 },
        feedback: "Seminar meningkatkan awareness, tetapi dampak jangka panjang lemah tanpa latihan dan tindak lanjut.",
        recommendation: "Ubah seminar menjadi program rutin berbasis kalender sekolah."
      }
    ]
  },
  {
    id: "simulasi-rawa-singkil",
    missionId: "misi-rawa-singkil",
    locationId: "rawa-singkil",
    title: "Studi Kasus Kebijakan Rawa Singkil",
    role: "Pengambil kebijakan daerah",
    scenario: "Sebuah perusahaan ingin membuka perkebunan kelapa sawit seluas 5.000 hektare di sekitar kawasan hutan Rawa Singkil. Kawasan tersebut memiliki nilai ekonomi, tetapi juga merupakan habitat penting orangutan dan ekosistem gambut. Sebagai pengambil kebijakan, keputusan apa yang paling tepat?",
    options: [
      {
        id: "approve_all",
        label: "Setujui seluruhnya",
        description: "Perusahaan mendapat izin penuh untuk membuka lahan tanpa syarat konservasi tambahan.",
        scores: { economy: 90, environment: 20, social: 45, sustainability: 30 },
        feedback: "Keputusan ini meningkatkan potensi ekonomi jangka pendek, tetapi memiliki risiko besar terhadap habitat orangutan, lahan gambut, dan keberlanjutan wilayah.",
        recommendation: "Pertimbangkan batas kawasan, AMDAL ketat, zona konservasi, dan konsultasi masyarakat sebelum memberikan izin."
      },
      {
        id: "reject_all",
        label: "Tolak seluruhnya",
        description: "Tidak ada pembukaan lahan baru di kawasan tersebut.",
        scores: { economy: 30, environment: 95, social: 60, sustainability: 75 },
        feedback: "Keputusan ini sangat kuat untuk perlindungan lingkungan, tetapi perlu solusi ekonomi alternatif agar masyarakat tetap mendapatkan manfaat pembangunan.",
        recommendation: "Kembangkan ekowisata, pertanian lokal berkelanjutan, dan program ekonomi hijau untuk masyarakat sekitar."
      },
      {
        id: "conditional_conservation",
        label: "Setujui dengan syarat konservasi",
        description: "Izin diberikan secara terbatas dengan zona konservasi, pengawasan, pelibatan masyarakat, dan pemulihan ekosistem.",
        scores: { economy: 75, environment: 80, social: 70, sustainability: 85 },
        feedback: "Keputusan ini paling seimbang karena tetap membuka peluang ekonomi, tetapi mensyaratkan konservasi, pengawasan, dan partisipasi masyarakat.",
        recommendation: "Pastikan pengawasan berjalan konsisten, data lingkungan dipantau, dan masyarakat dilibatkan dalam evaluasi berkala."
      }
    ]
  },
  {
    id: "simulasi-borobudur",
    missionId: "misi-borobudur",
    locationId: "borobudur",
    title: "Studi Kasus Wisata Budaya Borobudur",
    role: "Pengelola destinasi warisan budaya",
    scenario: "Jumlah wisatawan meningkat dan memberi pemasukan ekonomi. Namun kepadatan berisiko menurunkan kualitas pengalaman belajar dan merusak kawasan. Kebijakan apa yang paling tepat?",
    options: [
      {
        id: "unlimited_visit",
        label: "Buka kunjungan tanpa batas",
        description: "Semua wisatawan dapat masuk tanpa kuota agar pendapatan meningkat.",
        scores: { economy: 92, environment: 45, social: 60, sustainability: 40 },
        feedback: "Ekonomi naik cepat, tetapi risiko kerusakan dan over-tourism meningkat.",
        recommendation: "Gunakan kuota, edukasi pengunjung, dan jalur interpretasi budaya."
      },
      {
        id: "education_quota",
        label: "Kuota edukatif dan reservasi digital",
        description: "Pengunjung dibatasi berdasarkan daya dukung dan diberi materi edukasi digital sebelum berkunjung.",
        scores: { economy: 78, environment: 85, social: 82, sustainability: 88 },
        feedback: "Pilihan ini menjaga pengalaman edukatif dan pelestarian sambil tetap mendukung ekonomi lokal.",
        recommendation: "Tambahkan paket edukasi sekolah dan pelibatan UMKM lokal."
      },
      {
        id: "close_public",
        label: "Tutup kunjungan umum sepenuhnya",
        description: "Kawasan ditutup total untuk mencegah kerusakan.",
        scores: { economy: 25, environment: 95, social: 45, sustainability: 65 },
        feedback: "Perlindungan tinggi, tetapi dampak sosial-ekonomi bagi masyarakat perlu dipertimbangkan.",
        recommendation: "Sediakan virtual tour dan program ekonomi alternatif."
      }
    ]
  },
  {
    id: "simulasi-kalimantan",
    missionId: "misi-kalimantan",
    locationId: "kalimantan",
    title: "Studi Kasus Hutan Tropis Kalimantan",
    role: "Tim perencana tata ruang daerah",
    scenario: "Daerah membutuhkan pembangunan jalan untuk akses ekonomi, tetapi rute yang dipilih dapat membelah habitat satwa dan wilayah adat. Apa keputusan paling bertanggung jawab?",
    options: [
      {
        id: "fast_road",
        label: "Bangun rute tercepat tanpa kajian tambahan",
        description: "Jalan segera dibangun untuk mempercepat akses ekonomi.",
        scores: { economy: 88, environment: 30, social: 50, sustainability: 35 },
        feedback: "Akses ekonomi meningkat, tetapi risiko fragmentasi habitat dan konflik sosial tinggi.",
        recommendation: "Lakukan kajian lingkungan dan konsultasi masyarakat adat."
      },
      {
        id: "reroute_consultation",
        label: "Reroute berbasis kajian dan konsultasi adat",
        description: "Rute diubah untuk mengurangi dampak ekologis dan melibatkan masyarakat adat.",
        scores: { economy: 76, environment: 86, social: 88, sustainability: 90 },
        feedback: "Pilihan ini kuat karena menjaga akses ekonomi sekaligus menghormati ekologi dan masyarakat lokal.",
        recommendation: "Tetapkan koridor satwa, pemantauan, dan kompensasi yang adil."
      },
      {
        id: "cancel_all",
        label: "Batalkan seluruh pembangunan akses",
        description: "Tidak ada jalan baru agar hutan tetap utuh.",
        scores: { economy: 35, environment: 95, social: 58, sustainability: 75 },
        feedback: "Lingkungan terlindungi, tetapi kebutuhan akses masyarakat tetap perlu solusi.",
        recommendation: "Cari alternatif transportasi rendah dampak."
      }
    ]
  },
  {
    id: "simulasi-bali",
    missionId: "misi-bali",
    locationId: "bali",
    title: "Studi Kasus Sampah Wisata Bali",
    role: "Pengelola kawasan wisata",
    scenario: "Kunjungan wisata meningkat, tetapi volume sampah plastik juga naik. Pelaku wisata khawatir aturan baru mengurangi kenyamanan wisatawan. Apa kebijakan terbaik?",
    options: [
      {
        id: "no_rule",
        label: "Tidak membuat aturan baru",
        description: "Kegiatan wisata berjalan seperti biasa agar tidak mengganggu wisatawan.",
        scores: { economy: 82, environment: 35, social: 55, sustainability: 38 },
        feedback: "Ekonomi tetap berjalan, tetapi masalah sampah makin berat.",
        recommendation: "Terapkan aturan bertahap agar pelaku wisata dapat beradaptasi."
      },
      {
        id: "strict_ban_no_support",
        label: "Larangan total tanpa pendampingan",
        description: "Plastik sekali pakai langsung dilarang tanpa sosialisasi dan alternatif.",
        scores: { economy: 45, environment: 85, social: 55, sustainability: 65 },
        feedback: "Dampak lingkungan baik, tetapi resistensi sosial-ekonomi mungkin tinggi.",
        recommendation: "Sediakan transisi dan dukungan UMKM."
      },
      {
        id: "green_tourism_program",
        label: "Program wisata hijau kolaboratif",
        description: "Aturan pengurangan plastik disertai edukasi, insentif, dan dukungan alternatif ramah lingkungan.",
        scores: { economy: 78, environment: 88, social: 82, sustainability: 90 },
        feedback: "Pilihan ini paling berkelanjutan karena menggabungkan aturan, edukasi, dan dukungan ekonomi.",
        recommendation: "Pantau pengurangan sampah dan beri penghargaan pada pelaku wisata hijau."
      }
    ]
  },
  {
    id: "simulasi-raja-ampat",
    missionId: "misi-raja-ampat",
    locationId: "raja-ampat",
    title: "Studi Kasus Wisata Bahari Raja Ampat",
    role: "Pengelola kawasan wisata bahari",
    scenario: "Jumlah wisatawan meningkat pesat di kawasan terumbu karang. Ekonomi lokal tumbuh, tetapi risiko sampah, kerusakan karang, dan over-tourism ikut meningkat. Kebijakan mana yang paling tepat?",
    options: [
      {
        id: "mass_tourism",
        label: "Buka wisata seluas-luasnya",
        description: "Jumlah wisatawan tidak dibatasi agar pendapatan daerah naik cepat.",
        scores: { economy: 92, environment: 35, social: 55, sustainability: 40 },
        feedback: "Pendapatan meningkat, tetapi beban lingkungan terlalu besar dan dapat merusak daya tarik wisata dalam jangka panjang.",
        recommendation: "Tetapkan daya dukung kawasan dan edukasi wisatawan."
      },
      {
        id: "close_area",
        label: "Tutup seluruh area sensitif",
        description: "Kawasan ditutup penuh dari wisatawan untuk pemulihan ekosistem.",
        scores: { economy: 40, environment: 95, social: 58, sustainability: 80 },
        feedback: "Kebijakan ini melindungi ekosistem, tetapi perlu strategi ekonomi alternatif bagi pelaku wisata lokal.",
        recommendation: "Buka program restorasi dan pelatihan ekonomi alternatif."
      },
      {
        id: "quota_education",
        label: "Kuota wisata dan edukasi konservasi",
        description: "Wisatawan dibatasi berdasarkan daya dukung kawasan dan wajib mengikuti edukasi konservasi.",
        scores: { economy: 78, environment: 88, social: 76, sustainability: 90 },
        feedback: "Pilihan ini menjaga ekonomi lokal sekaligus mengurangi tekanan pada ekosistem melalui kuota dan literasi lingkungan.",
        recommendation: "Gunakan sistem reservasi, pengawasan, dan laporan kualitas lingkungan berkala."
      }
    ]
  },
  {
    id: "simulasi-merauke",
    missionId: "misi-merauke",
    locationId: "merauke",
    title: "Studi Kasus Pangan Lokal Merauke",
    role: "Perancang program pangan daerah",
    scenario: "Program pangan baru ingin meningkatkan produksi, tetapi perlu menjaga budaya lokal, lahan, dan keterlibatan masyarakat adat. Strategi apa yang paling tepat?",
    options: [
      {
        id: "industrial_only",
        label: "Fokus produksi besar tanpa konsultasi",
        description: "Program mengejar produksi cepat dengan model industri skala besar.",
        scores: { economy: 86, environment: 42, social: 38, sustainability: 40 },
        feedback: "Produksi dapat naik, tetapi risiko sosial dan ekologis tinggi karena masyarakat lokal tidak dilibatkan.",
        recommendation: "Lakukan konsultasi dan pemetaan dampak sosial-ekologis."
      },
      {
        id: "local_food_collaboration",
        label: "Kolaborasi pangan lokal dan teknologi tepat guna",
        description: "Program menguatkan pangan lokal, pelatihan, teknologi tepat guna, dan pelibatan masyarakat adat.",
        scores: { economy: 80, environment: 84, social: 90, sustainability: 88 },
        feedback: "Pilihan ini kuat karena memperhatikan produktivitas, budaya, lingkungan, dan keberlanjutan.",
        recommendation: "Bangun koperasi lokal, pelatihan, dan monitoring hasil panen."
      },
      {
        id: "no_program",
        label: "Tidak menjalankan program pangan baru",
        description: "Program dihentikan agar tidak ada perubahan pada wilayah.",
        scores: { economy: 35, environment: 88, social: 55, sustainability: 60 },
        feedback: "Risiko lingkungan rendah, tetapi peluang peningkatan kesejahteraan dan pangan tidak berkembang.",
        recommendation: "Pertimbangkan program kecil berbasis kebutuhan masyarakat."
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
