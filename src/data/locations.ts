import type { Location } from "@/types";

export const locations: Location[] = [
  {
    id: "rawa-singkil",
    name: "Rawa Singkil",
    province: "Aceh",
    theme: "Konservasi Orangutan dan Lahan Gambut",
    shortDescription: "Ekosistem rawa gambut yang menjadi habitat penting orangutan Sumatra.",
    description:
      "Rawa Singkil merupakan kawasan rawa gambut bernilai ekologis tinggi di Aceh. Kawasan ini penting untuk konservasi orangutan, penyimpanan karbon, perlindungan keanekaragaman hayati, dan kehidupan masyarakat sekitar.",
    imageEmoji: "🦧",
    xp: 200,
    coords: { x: 14, y: 34 },
    facts: [
      "Rawa gambut menyimpan karbon dalam jumlah besar.",
      "Orangutan membutuhkan koridor hutan yang aman untuk bertahan hidup.",
      "Konservasi harus mempertimbangkan kesejahteraan masyarakat lokal."
    ]
  },
  {
    id: "borobudur",
    name: "Borobudur",
    province: "Jawa Tengah",
    theme: "Warisan Budaya dan Pariwisata Berkelanjutan",
    shortDescription: "Candi Buddha terbesar di dunia dan ikon pembelajaran sejarah Indonesia.",
    description:
      "Borobudur adalah warisan budaya yang dapat digunakan sebagai media pembelajaran sejarah, toleransi, arsitektur, dan pengelolaan pariwisata berkelanjutan.",
    imageEmoji: "🏛️",
    xp: 150,
    coords: { x: 43, y: 67 },
    facts: [
      "Borobudur merupakan situs warisan budaya yang memiliki nilai sejarah tinggi.",
      "Pengelolaan wisata perlu menjaga keseimbangan ekonomi dan pelestarian.",
      "Relief Borobudur menyimpan banyak narasi edukatif."
    ]
  },
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    province: "Papua Barat Daya",
    theme: "Ekosistem Terumbu Karang",
    shortDescription: "Kawasan laut dengan keanekaragaman hayati tinggi.",
    description:
      "Raja Ampat terkenal sebagai salah satu pusat keanekaragaman hayati laut dunia. Pembelajaran di lokasi ini menekankan konservasi, pariwisata bertanggung jawab, dan literasi lingkungan.",
    imageEmoji: "🐠",
    xp: 200,
    coords: { x: 84, y: 49 },
    facts: [
      "Terumbu karang adalah rumah bagi banyak spesies laut.",
      "Wisata bahari perlu dikembangkan secara bertanggung jawab.",
      "Kualitas air sangat memengaruhi kesehatan ekosistem laut."
    ]
  },
  {
    id: "bali",
    name: "Bali",
    province: "Bali",
    theme: "Budaya, Pariwisata, dan Keseimbangan Lingkungan",
    shortDescription: "Pulau dengan kekayaan budaya dan tantangan pariwisata berkelanjutan.",
    description:
      "Bali menjadi contoh penting untuk memahami hubungan budaya, ekonomi pariwisata, pengelolaan lingkungan, dan tanggung jawab sosial.",
    imageEmoji: "🌺",
    xp: 160,
    coords: { x: 55, y: 72 },
    facts: [
      "Pariwisata memberi manfaat ekonomi tetapi perlu tata kelola lingkungan.",
      "Kearifan lokal dapat menjadi dasar pendidikan karakter.",
      "Pengurangan sampah menjadi isu penting di kawasan wisata."
    ]
  },
  {
    id: "kalimantan",
    name: "Kalimantan",
    province: "Kalimantan",
    theme: "Hutan Tropis dan Keanekaragaman Hayati",
    shortDescription: "Pulau dengan hutan tropis luas dan kekayaan biodiversitas.",
    description:
      "Kalimantan memiliki hutan tropis yang penting untuk keseimbangan iklim, habitat satwa, dan kehidupan masyarakat adat.",
    imageEmoji: "🌳",
    xp: 180,
    coords: { x: 48, y: 40 },
    facts: [
      "Hutan tropis berperan sebagai penyerap karbon.",
      "Masyarakat adat memiliki pengetahuan lokal tentang konservasi.",
      "Pembukaan lahan perlu dikaji melalui aspek sosial dan ekologis."
    ]
  },
  {
    id: "merauke",
    name: "Merauke",
    province: "Papua Selatan",
    theme: "Pangan, Budaya Lokal, dan Ekosistem Timur Indonesia",
    shortDescription: "Wilayah timur Indonesia dengan kekayaan budaya dan potensi pangan.",
    description:
      "Merauke dapat menjadi konteks pembelajaran tentang kedaulatan pangan, budaya lokal, dan pengelolaan sumber daya alam secara bertanggung jawab.",
    imageEmoji: "🌾",
    xp: 170,
    coords: { x: 92, y: 73 },
    facts: [
      "Pangan lokal dapat mendukung ketahanan pangan nasional.",
      "Pengembangan wilayah harus memperhatikan masyarakat adat.",
      "Ekosistem timur Indonesia memiliki keunikan tersendiri."
    ]
  }
];

export function getLocationById(id: string) {
  return locations.find((location) => location.id === id);
}
