export const quickQuestions = [
  "Apa itu Rawa Singkil?",
  "Mengapa orangutan terancam punah?",
  "Bagaimana cara menjaga ekosistemnya?",
  "Apa hubungan ekonomi dan keberlanjutan?",
  "Apa manfaat mitigasi tsunami di Aceh?",
  "Bagaimana wisata Raja Ampat tetap lestari?"
];

export function answerTutor(question: string) {
  const normalized = question.toLowerCase();

  if (containsAny(normalized, ["rawa", "singkil", "gambut"])) {
    return "Rawa Singkil adalah kawasan rawa gambut penting di Aceh. Ekosistem ini menyimpan karbon, menjadi habitat orangutan Sumatra, menjaga keanekaragaman hayati, dan mendukung kehidupan masyarakat sekitar. Dalam Nusantaraverse, Rawa Singkil digunakan untuk belajar keputusan pembangunan yang seimbang.";
  }

  if (containsAny(normalized, ["orangutan", "punah", "satwa"])) {
    return "Orangutan terancam karena kehilangan habitat, fragmentasi hutan, konflik dengan manusia, dan pembukaan lahan yang tidak terkendali. Perlindungan orangutan membutuhkan koridor hutan, pengawasan kawasan, edukasi masyarakat, dan kebijakan pembangunan yang mempertimbangkan dampak ekologis.";
  }

  if (containsAny(normalized, ["menjaga", "konservasi", "ekosistem", "lingkungan"])) {
    return "Ekosistem dapat dijaga melalui zona konservasi, pemulihan habitat, pengawasan berbasis data, pelibatan masyarakat lokal, edukasi lingkungan, serta kebijakan yang menyeimbangkan ekonomi, sosial, lingkungan, dan keberlanjutan.";
  }

  if (containsAny(normalized, ["ekonomi", "berkelanjutan", "keberlanjutan", "pembangunan"])) {
    return "Ekonomi dan keberlanjutan harus berjalan bersama. Pembangunan yang hanya mengejar keuntungan jangka pendek dapat merusak ekosistem dan menimbulkan biaya sosial di masa depan. Kebijakan terbaik biasanya memiliki manfaat ekonomi, melindungi lingkungan, diterima masyarakat, dan dapat dijalankan konsisten.";
  }

  if (containsAny(normalized, ["raja ampat", "karang", "laut", "bahari"])) {
    return "Raja Ampat memiliki keanekaragaman hayati laut yang sangat tinggi. Wisata bahari perlu diatur melalui kuota, edukasi konservasi, pengelolaan sampah, dan pemantauan kualitas lingkungan agar ekonomi lokal tetap berjalan tanpa merusak terumbu karang.";
  }

  if (containsAny(normalized, ["borobudur", "candi", "sejarah", "budaya"])) {
    return "Borobudur adalah situs warisan budaya yang dapat digunakan untuk belajar sejarah, toleransi, arsitektur, dan pariwisata berkelanjutan. Pengelolaan pengunjung, edukasi digital, dan pelibatan masyarakat lokal penting agar pelestarian tetap berjalan.";
  }

  if (containsAny(normalized, ["bali", "wisata", "sampah", "pariwisata"])) {
    return "Bali menunjukkan hubungan erat antara budaya, pariwisata, ekonomi, dan lingkungan. Tantangan seperti sampah dan tekanan wisata dapat diatasi dengan program wisata hijau, edukasi wisatawan, dukungan UMKM, dan aturan bertahap yang dapat dipatuhi.";
  }

  if (containsAny(normalized, ["kalimantan", "hutan", "adat", "tropis"])) {
    return "Kalimantan memiliki hutan tropis yang penting sebagai penyerap karbon dan habitat satwa. Perencanaan pembangunan perlu melibatkan masyarakat adat, menjaga koridor satwa, dan menggunakan kajian lingkungan agar tidak menimbulkan konflik sosial-ekologis.";
  }

  if (containsAny(normalized, ["aceh", "tsunami", "bencana", "mitigasi"])) {
    return "Mitigasi tsunami di Aceh penting untuk membangun kesiapsiagaan masyarakat. Edukasi bencana, peta evakuasi, latihan berkala, dan kolaborasi sekolah dengan komunitas dapat mengurangi risiko korban saat bencana terjadi.";
  }

  if (containsAny(normalized, ["merauke", "pangan", "gizi", "lokal"])) {
    return "Merauke dapat menjadi konteks pembelajaran tentang pangan lokal, budaya, dan keberlanjutan. Program pangan yang baik perlu meningkatkan produksi, menggunakan teknologi tepat guna, dan tetap menghormati masyarakat lokal serta ekosistem setempat.";
  }

  if (containsAny(normalized, ["skor", "simulasi", "keputusan", "nilai"])) {
    return "Skor simulasi dihitung dari empat aspek: ekonomi, lingkungan, sosial, dan keberlanjutan. Tujuannya bukan mencari satu jawaban tunggal, tetapi melatih siswa menimbang konsekuensi dari setiap keputusan secara kritis.";
  }

  return "Pertanyaan bagus. Dalam Nusantaraverse, kamu bisa menghubungkan topik tersebut dengan empat aspek analisis: ekonomi, lingkungan, sosial, dan keberlanjutan. Coba ajukan pertanyaan yang lebih spesifik tentang lokasi, masalah, atau keputusan yang ingin kamu bahas.";
}

function containsAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}
