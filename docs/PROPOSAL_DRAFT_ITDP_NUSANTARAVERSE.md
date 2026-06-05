# Draft Proposal ITDP — Nusantaraverse

## Judul

**Nusantaraverse: Platform Eksplorasi Pembelajaran Indonesia Berbasis AI, Simulasi Keputusan, Gamifikasi, dan Analitik Pembelajaran**

## Abstrak

Nusantaraverse adalah platform pembelajaran digital berbasis web yang dirancang untuk membantu siswa memahami kekayaan alam, budaya, sejarah, dan isu keberlanjutan Indonesia melalui pengalaman belajar interaktif. Platform ini menggabungkan peta eksplorasi Indonesia, AI Tutor, misi pembelajaran berbasis lokasi, simulasi keputusan, gamifikasi, serta dashboard analitik guru. Melalui studi kasus seperti konservasi orangutan di Rawa Singkil, siswa tidak hanya membaca materi, tetapi juga menjelajahi lokasi, bertanya kepada AI Tutor, mengambil keputusan, dan melihat dampak keputusan terhadap aspek ekonomi, lingkungan, sosial, dan keberlanjutan. Guru dapat memantau perkembangan siswa melalui data penyelesaian misi, skor pemahaman, topik yang perlu ditingkatkan, serta insight pembelajaran. Produk dikembangkan menggunakan pendekatan Design Thinking dan Agile Development agar sesuai dengan kebutuhan siswa dan guru. Nusantaraverse diharapkan dapat meningkatkan literasi digital, kemampuan berpikir kritis, kepedulian terhadap lingkungan dan budaya, serta mendukung pembelajaran yang kontekstual, menarik, dan berdampak.

## Latar Belakang

Pembelajaran tentang Indonesia, khususnya kekayaan alam, budaya, sejarah, dan isu keberlanjutan, masih sering disampaikan secara tekstual dan kurang melibatkan siswa dalam pengalaman belajar yang eksploratif. Padahal, siswa perlu memahami bahwa keputusan pembangunan memiliki dampak terhadap ekonomi, lingkungan, sosial, dan keberlanjutan. Guru juga membutuhkan media pembelajaran digital yang tidak hanya menarik, tetapi mampu memberikan data perkembangan siswa.

Perkembangan teknologi digital membuka peluang untuk menghadirkan pembelajaran yang lebih interaktif melalui peta digital, AI Tutor, simulasi, gamifikasi, dan analitik pembelajaran. Nusantaraverse hadir sebagai solusi berbasis web app responsif yang membantu siswa belajar secara kontekstual melalui eksplorasi lokasi Indonesia dan studi kasus nyata.

## Rumusan Masalah

1. Bagaimana merancang platform pembelajaran digital yang membantu siswa mengeksplorasi Indonesia secara interaktif?
2. Bagaimana mengintegrasikan AI Tutor, simulasi keputusan, dan gamifikasi dalam satu pengalaman belajar?
3. Bagaimana menyediakan dashboard analitik yang membantu guru memantau pemahaman dan perkembangan siswa?

## Tujuan

1. Mengembangkan platform pembelajaran digital berbasis eksplorasi Indonesia.
2. Menghadirkan AI Tutor sebagai pendamping belajar siswa.
3. Mengembangkan simulasi keputusan untuk melatih berpikir kritis dan pemahaman dampak.
4. Meningkatkan motivasi belajar melalui XP, badge, level, dan leaderboard.
5. Menyediakan dashboard guru untuk memantau perkembangan siswa.

## Manfaat

### Untuk Siswa

1. Belajar lebih interaktif dan kontekstual.
2. Memahami dampak keputusan terhadap ekonomi, lingkungan, sosial, dan keberlanjutan.
3. Meningkatkan literasi digital dan berpikir kritis.
4. Menumbuhkan kepedulian terhadap lingkungan dan budaya Indonesia.

### Untuk Guru

1. Memantau penyelesaian misi dan pemahaman siswa.
2. Mengetahui topik yang perlu diperkuat.
3. Mendapatkan insight untuk tindak lanjut pembelajaran.

### Untuk Sekolah

1. Mendukung transformasi pembelajaran digital.
2. Menyediakan media pembelajaran inovatif.
3. Mendukung pembelajaran karakter dan keberlanjutan.

## Metode Pengembangan

Metode yang digunakan adalah **Design Thinking** dan **Agile Development**.

### Empathize

Kegiatan berupa survei siswa, wawancara guru, dan observasi kebutuhan pembelajaran.

### Define

Tim merumuskan masalah utama, target pengguna, indikator keberhasilan, dan fitur prioritas.

### Ideate

Tim merancang konsep peta eksplorasi, AI Tutor, misi, simulasi keputusan, scoring, gamifikasi, dan dashboard guru.

### Prototype

Tim membuat prototype web app dengan Next.js, Tailwind CSS, data lokal, AI fallback, dan dashboard dummy.

### Test

Tim melakukan uji fungsionalitas, uji usability, pre-test/post-test, dan wawancara singkat dengan guru.

## Analisis Fungsional Produk

| Fitur | Fungsi | Pengguna |
|---|---|---|
| Peta Eksplorasi | Menampilkan lokasi dan misi pembelajaran | Siswa |
| AI Tutor | Menjawab pertanyaan berbasis materi | Siswa |
| Simulasi Keputusan | Melatih analisis dampak kebijakan | Siswa |
| Scoring Dampak | Menampilkan skor ekonomi, lingkungan, sosial, keberlanjutan | Siswa |
| Gamifikasi | Memberikan XP, level, badge, dan leaderboard | Siswa |
| Dashboard Guru | Memantau perkembangan dan topik sulit | Guru |

## Desain Produk Teknologi Digital

Produk dikembangkan sebagai web app responsif berbasis Next.js. Sistem terdiri dari frontend, data lokal/MVP, modul AI fallback, modul scoring, dan dashboard analitik. Pada pengembangan lanjutan, data akan disimpan di Supabase/Firebase dan AI Tutor dapat diintegrasikan dengan AI API yang dibatasi pada materi pembelajaran.

## Implementasi Awal

MVP telah mencakup halaman landing page, login demo, dashboard siswa, peta eksplorasi, detail misi, AI Tutor, simulasi keputusan Rawa Singkil, skor dampak, badge, leaderboard, dashboard guru, dan prototype eksplorasi virtual ringan.

## Validasi Awal

Validasi dilakukan melalui:

1. Uji fungsionalitas fitur.
2. Uji usability siswa menggunakan skala 1–5.
3. Pre-test dan post-test untuk mengukur peningkatan pemahaman.
4. Wawancara guru untuk menilai manfaat dashboard.

## Dampak yang Diharapkan

1. Meningkatkan minat siswa dalam mempelajari Indonesia.
2. Meningkatkan pemahaman siswa terhadap isu lingkungan dan budaya.
3. Melatih kemampuan berpikir kritis melalui simulasi keputusan.
4. Membantu guru mengambil keputusan pembelajaran berbasis data.
5. Mendukung literasi digital dan pembelajaran berdampak.

## Daftar Pustaka Awal

Isi dengan sumber tentang pembelajaran digital, gamifikasi, konservasi Rawa Singkil, AI dalam pendidikan, dan analitik pembelajaran.
