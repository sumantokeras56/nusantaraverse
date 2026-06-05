import type { Mission } from "@/types";

export const missions: Mission[] = [
  {
    id: "misi-rawa-singkil",
    locationId: "rawa-singkil",
    title: "Konservasi Orangutan di Rawa Singkil",
    description:
      "Pelajari hubungan antara hutan gambut, orangutan, masyarakat lokal, dan keputusan pembangunan.",
    objectives: [
      "Menjelaskan fungsi ekosistem rawa gambut.",
      "Mengidentifikasi ancaman terhadap orangutan.",
      "Menganalisis dampak kebijakan terhadap ekonomi, lingkungan, sosial, dan keberlanjutan."
    ],
    xpReward: 200,
    difficulty: "Sedang",
    estimatedTime: "20 menit"
  },
  {
    id: "misi-borobudur",
    locationId: "borobudur",
    title: "Sejarah dan Pelestarian Borobudur",
    description:
      "Jelajahi nilai sejarah Borobudur dan bagaimana pariwisata dapat dikembangkan secara berkelanjutan.",
    objectives: [
      "Mengenali nilai sejarah Borobudur.",
      "Memahami tantangan pelestarian situs budaya.",
      "Menjelaskan hubungan pariwisata dan keberlanjutan."
    ],
    xpReward: 150,
    difficulty: "Mudah",
    estimatedTime: "15 menit"
  },
  {
    id: "misi-raja-ampat",
    locationId: "raja-ampat",
    title: "Ekosistem Terumbu Karang Raja Ampat",
    description:
      "Pelajari keanekaragaman laut, ancaman ekosistem, dan strategi wisata bahari bertanggung jawab.",
    objectives: [
      "Menjelaskan peran terumbu karang.",
      "Mengidentifikasi ancaman terhadap ekosistem laut.",
      "Menyusun rekomendasi wisata bahari berkelanjutan."
    ],
    xpReward: 200,
    difficulty: "Sedang",
    estimatedTime: "20 menit"
  },
  {
    id: "misi-bali",
    locationId: "bali",
    title: "Pariwisata Berkelanjutan di Bali",
    description:
      "Pahami bagaimana budaya, ekonomi, dan lingkungan saling memengaruhi dalam pembangunan pariwisata.",
    objectives: [
      "Menjelaskan manfaat ekonomi pariwisata.",
      "Menganalisis tantangan sampah dan lingkungan.",
      "Menyusun sikap wisatawan bertanggung jawab."
    ],
    xpReward: 160,
    difficulty: "Mudah",
    estimatedTime: "15 menit"
  }
];

export function getMissionById(id: string) {
  return missions.find((mission) => mission.id === id);
}

export function getMissionByLocationId(locationId: string) {
  return missions.find((mission) => mission.locationId === locationId);
}
