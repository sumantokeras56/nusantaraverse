const knowledgeBase = [
  {
    keywords: ["rawa singkil", "singkil", "gambut"],
    answer:
      "Rawa Singkil adalah ekosistem rawa gambut di Aceh yang penting untuk habitat orangutan, penyimpanan karbon, keanekaragaman hayati, dan kehidupan masyarakat lokal. Dalam Nusantaraverse, Rawa Singkil digunakan sebagai studi kasus konservasi dan pengambilan keputusan berkelanjutan."
  },
  {
    keywords: ["orangutan", "terancam", "satwa"],
    answer:
      "Orangutan terancam karena kehilangan habitat, fragmentasi hutan, perburuan, dan konflik ruang antara konservasi dan pembangunan. Perlindungan habitat dan koridor hutan sangat penting agar populasi orangutan tetap bertahan."
  },
  {
    keywords: ["menjaga", "ekosistem", "konservasi"],
    answer:
      "Cara menjaga ekosistem antara lain menetapkan zona konservasi, mencegah pembukaan lahan berisiko, memantau kualitas lingkungan, melibatkan masyarakat lokal, dan mengembangkan ekonomi hijau seperti ekowisata atau produk lokal berkelanjutan."
  },
  {
    keywords: ["fakta", "menarik"],
    answer:
      "Fakta menarik: ekosistem gambut dapat menyimpan karbon dalam jumlah besar. Jika rusak atau terbakar, karbon tersebut dapat terlepas dan memperparah perubahan iklim. Karena itu, menjaga gambut berarti menjaga iklim dan kehidupan banyak spesies."
  },
  {
    keywords: ["raja ampat", "terumbu", "laut"],
    answer:
      "Raja Ampat dikenal sebagai kawasan laut dengan keanekaragaman hayati tinggi. Terumbu karang di sana menjadi rumah bagi banyak spesies laut dan perlu dijaga melalui wisata bertanggung jawab, pembatasan daya dukung, dan edukasi konservasi."
  },
  {
    keywords: ["borobudur", "candi", "budaya"],
    answer:
      "Borobudur adalah situs budaya penting yang dapat digunakan untuk pembelajaran sejarah, arsitektur, toleransi, dan pariwisata berkelanjutan. Pelestarian situs perlu berjalan seimbang dengan manfaat ekonomi masyarakat."
  }
];

export function answerTutor(question: string): string {
  const normalized = question.toLowerCase();
  const found = knowledgeBase.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  if (found) {
    return found.answer;
  }

  return "Pertanyaan yang bagus. Untuk versi MVP, AI Explore menjawab berdasarkan materi lokal yang tersedia. Coba tanyakan tentang Rawa Singkil, orangutan, ekosistem, konservasi, Raja Ampat, atau Borobudur.";
}

export const quickQuestions = [
  "Apa itu Rawa Singkil?",
  "Mengapa orangutan terancam punah?",
  "Bagaimana cara menjaga ekosistemnya?",
  "Berikan fakta menarik tentang Rawa Singkil!"
];
