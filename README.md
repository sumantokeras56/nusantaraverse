# Nusantaraverse — Starter Web App LIDM 2026

**Nusantaraverse** adalah platform pembelajaran digital berbasis eksplorasi Indonesia yang menggabungkan peta eksplorasi, AI Tutor berbasis materi lokal, simulasi keputusan, gamifikasi, leaderboard, dan dashboard guru.

Project ini disiapkan agar bisa langsung dibuka di **VS Code**, dijalankan secara lokal, lalu dikembangkan untuk proposal, demo, dan presentasi LIDM.

---

## 1. Isi Project

Project ini sudah memiliki halaman dan fitur dasar:

- Landing page
- Login demo siswa/guru
- Dashboard siswa
- Peta eksplorasi Indonesia versi web interaktif
- Detail misi pembelajaran
- AI Tutor lokal berbasis rule-based fallback
- Simulasi keputusan Rawa Singkil
- Skor dampak ekonomi, lingkungan, sosial, dan keberlanjutan
- XP, badge, leaderboard
- Dashboard guru dengan grafik analitik
- Prototype eksplorasi virtual ringan
- Dokumen proposal, validasi, transparansi AI, script video, dan checklist final

---

## 2. Software yang Perlu Ada

Pastikan sudah menginstal:

1. VS Code
2. Node.js LTS
3. Git, opsional tetapi disarankan
4. Browser Chrome atau Edge

Cek Node.js di terminal:

```bash
node -v
npm -v
```

---

## 3. Cara Menjalankan di VS Code

### Step 1 — Extract ZIP

Extract folder ini, misalnya menjadi:

```text
Documents/nusantaraverse-starter
```

### Step 2 — Buka Folder di VS Code

Buka VS Code, lalu pilih:

```text
File > Open Folder > pilih folder nusantaraverse-starter
```

Atau lewat terminal:

```bash
cd path/ke/nusantaraverse-starter
code .
```

### Step 3 — Install Dependency

Di terminal VS Code, jalankan:

```bash
npm install
```

### Step 4 — Jalankan Web App

```bash
npm run dev
```

Buka browser:

```text
http://localhost:3000
```

---

## 4. Alur Demo yang Disarankan

1. Buka halaman utama.
2. Klik **Masuk sebagai Siswa**.
3. Lihat dashboard siswa dan peta eksplorasi.
4. Buka misi Rawa Singkil.
5. Buka AI Tutor dan coba pertanyaan cepat.
6. Buka simulasi keputusan.
7. Pilih opsi keputusan dan lihat skor dampak.
8. Buka leaderboard.
9. Kembali ke login, masuk sebagai guru.
10. Tampilkan dashboard analitik guru.

---

## 5. Catatan Penting

- Project ini adalah **starter MVP**, belum memakai database online.
- Data masih berada di file lokal pada folder `src/data`.
- AI Tutor yang disediakan adalah fallback lokal, sehingga bisa berjalan tanpa API.
- Jika ingin menambahkan OpenAI/Gemini/Supabase, gunakan file `.env.local` berdasarkan `.env.example`.
- Untuk lomba, tambahkan hasil uji coba pengguna, pre-test/post-test, dan dokumentasi validasi.

---

## 6. Struktur Folder Penting

```text
src/app                 Halaman utama web app
src/components          Komponen UI
src/data                Data dummy lokasi, misi, simulasi, badge
src/lib                 Fungsi AI fallback dan scoring
src/types               TypeScript types
docs                    Dokumen pendukung lomba
public                  Manifest PWA dan aset publik
```

---

## 7. Deployment ke Vercel

1. Upload project ke GitHub.
2. Login ke Vercel.
3. Pilih **Add New Project**.
4. Pilih repository Nusantaraverse.
5. Klik **Deploy**.
6. Gunakan link Vercel untuk proposal dan video demo.

---

## 8. Akun Demo

Saat ini login masih berbasis tombol demo:

- **Siswa:** masuk ke `/student/dashboard`
- **Guru:** masuk ke `/teacher/dashboard`

Nanti bisa diganti dengan Supabase Auth atau Firebase Auth.

---

## 9. Prioritas Pengembangan Lanjutan

1. Hubungkan login ke Supabase/Firebase.
2. Simpan progress siswa ke database.
3. Tambahkan lebih banyak lokasi dan misi.
4. Integrasikan AI API dengan batasan materi.
5. Tambahkan export laporan PDF untuk guru.
6. Tambahkan mode offline PWA.

---

**Tagline:** Belajar Indonesia, Menjelajahi Indonesia, Berdampak untuk Indonesia.


## Update V2 — Fitur Demo Lengkap

Versi ini sudah dilengkapi dengan penyimpanan progress lokal, pre-test/post-test, simulasi untuk semua misi, riwayat AI Tutor, dashboard guru dinamis, laporan CSV, leaderboard dinamis, dan PWA dasar.

### Alur Demo Cepat

1. Buka `/login` dan pilih siswa.
2. Kerjakan `/student/assessment` sebagai pre-test.
3. Buka `/student/dashboard` dan pilih misi.
4. Jalankan simulasi, klik simpan progress.
5. Tanya AI Tutor di `/student/ai-tutor`.
6. Kerjakan post-test.
7. Buka `/teacher/dashboard` dan `/teacher/report`.

### Catatan

Data masih disimpan dengan localStorage supaya aman untuk demo tanpa konfigurasi database.
