export type AssessmentQuestion = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "q1",
    question: "Apa fungsi penting ekosistem rawa gambut seperti Rawa Singkil?",
    options: [
      "Hanya sebagai lahan kosong untuk pembangunan",
      "Menyimpan karbon, menjaga keanekaragaman hayati, dan mendukung kehidupan masyarakat",
      "Tempat wisata tanpa nilai ekologis",
      "Sumber air laut untuk industri"
    ],
    answerIndex: 1,
    explanation: "Rawa gambut memiliki fungsi ekologis, sosial, dan iklim yang penting."
  },
  {
    id: "q2",
    question: "Mengapa orangutan terancam saat hutan dibuka tanpa pengawasan?",
    options: [
      "Karena habitat dan koridor jelajahnya rusak",
      "Karena orangutan tidak membutuhkan hutan",
      "Karena air laut meningkat",
      "Karena terlalu banyak sekolah"
    ],
    answerIndex: 0,
    explanation: "Orangutan bergantung pada habitat hutan yang aman dan terhubung."
  },
  {
    id: "q3",
    question: "Keputusan pembangunan yang seimbang perlu mempertimbangkan aspek apa saja?",
    options: [
      "Ekonomi saja",
      "Lingkungan saja",
      "Ekonomi, lingkungan, sosial, dan keberlanjutan",
      "Popularitas kebijakan saja"
    ],
    answerIndex: 2,
    explanation: "Pembangunan berkelanjutan menuntut keseimbangan berbagai aspek."
  },
  {
    id: "q4",
    question: "Apa manfaat simulasi keputusan dalam pembelajaran?",
    options: [
      "Membuat siswa menghafal tanpa berpikir",
      "Melatih siswa menganalisis konsekuensi dari suatu pilihan",
      "Menghapus peran guru",
      "Mengganti semua kegiatan belajar"
    ],
    answerIndex: 1,
    explanation: "Simulasi membantu siswa melihat hubungan antara keputusan dan dampak."
  },
  {
    id: "q5",
    question: "Mengapa masyarakat lokal perlu dilibatkan dalam kebijakan lingkungan?",
    options: [
      "Agar keputusan lebih adil, kontekstual, dan dapat dijalankan",
      "Agar proses menjadi lebih sulit",
      "Karena masyarakat tidak punya pengetahuan",
      "Agar teknologi tidak digunakan"
    ],
    answerIndex: 0,
    explanation: "Partisipasi masyarakat penting untuk keberterimaan dan keberlanjutan kebijakan."
  },
  {
    id: "q6",
    question: "Apa arti konservasi dalam konteks Nusantaraverse?",
    options: [
      "Menghentikan semua aktivitas manusia tanpa solusi",
      "Mengelola dan melindungi sumber daya alam secara bertanggung jawab",
      "Mengubah semua hutan menjadi industri",
      "Mengabaikan kebutuhan masyarakat"
    ],
    answerIndex: 1,
    explanation: "Konservasi berarti perlindungan dan pengelolaan secara bijak."
  },
  {
    id: "q7",
    question: "Apa peran AI Tutor dalam MVP Nusantaraverse saat ini?",
    options: [
      "Menggantikan seluruh karya tim",
      "Menjadi fitur pendukung untuk tanya jawab dan umpan balik belajar",
      "Menghapus kebutuhan materi pembelajaran",
      "Membuat keputusan otomatis untuk siswa"
    ],
    answerIndex: 1,
    explanation: "AI Tutor adalah fitur pendukung, bukan keseluruhan karya."
  },
  {
    id: "q8",
    question: "Apa indikator bahwa produk pembelajaran berdampak?",
    options: [
      "Ada peningkatan pemahaman, penyelesaian misi, dan feedback positif pengguna",
      "Hanya tampilan yang indah",
      "Hanya jumlah warna yang banyak",
      "Tidak perlu diuji"
    ],
    answerIndex: 0,
    explanation: "Dampak perlu dibuktikan melalui data penggunaan dan validasi."
  },
  {
    id: "q9",
    question: "Apa risiko jika pembangunan ekonomi mengabaikan lingkungan?",
    options: [
      "Ekosistem rusak dan keberlanjutan jangka panjang terganggu",
      "Semua masalah selesai",
      "Keanekaragaman hayati meningkat otomatis",
      "Tidak ada risiko"
    ],
    answerIndex: 0,
    explanation: "Kerusakan lingkungan dapat menimbulkan risiko sosial dan ekonomi jangka panjang."
  },
  {
    id: "q10",
    question: "Mengapa dashboard guru penting dalam Nusantaraverse?",
    options: [
      "Agar guru dapat memantau progress, topik sulit, dan tindak lanjut pembelajaran",
      "Agar siswa tidak perlu belajar",
      "Agar data belajar dihapus",
      "Agar guru tidak melihat hasil siswa"
    ],
    answerIndex: 0,
    explanation: "Dashboard membantu guru membuat keputusan pembelajaran berbasis data."
  }
];
