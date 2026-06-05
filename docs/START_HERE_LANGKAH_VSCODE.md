# START HERE — Langkah dari Awal Sampai Web Berjalan

Ikuti langkah ini setelah folder project dibuka di VS Code.

## 1. Buka Terminal VS Code

Menu:

```text
Terminal > New Terminal
```

Pastikan posisi terminal berada di folder project. Jika belum, masuk ke folder:

```bash
cd nusantaraverse-starter
```

## 2. Install Dependency

```bash
npm install
```

Tunggu sampai selesai. Jika ada peringatan `deprecated` tetapi proses selesai, biasanya tidak masalah.

## 3. Jalankan Web App

```bash
npm run dev
```

Lalu buka browser:

```text
http://localhost:3000
```

## 4. Alur Demo Cepat

1. Buka halaman utama.
2. Klik **Mulai Demo Siswa**.
3. Klik marker Rawa Singkil di peta.
4. Klik **Mulai Misi**.
5. Baca ringkasan materi.
6. Klik **Tanya AI Explore**.
7. Coba pertanyaan cepat.
8. Kembali ke misi dan klik **Mulai Simulasi**.
9. Pilih keputusan.
10. Klik **Putuskan**.
11. Lihat skor dan feedback.
12. Buka **Dashboard Guru**.

## 5. File yang Paling Sering Diedit

- Data lokasi: `src/data/locations.ts`
- Data misi: `src/data/missions.ts`
- Data simulasi: `src/data/simulations.ts`
- Jawaban AI lokal: `src/lib/ai.ts`
- Halaman utama: `src/app/page.tsx`
- Dashboard siswa: `src/app/student/dashboard/page.tsx`
- Dashboard guru: `src/app/teacher/dashboard/page.tsx`

## 6. Cara Build Sebelum Deploy

```bash
npm run build
```

Jika berhasil, lanjut deploy ke Vercel.

## 7. Deploy ke Vercel

1. Push ke GitHub.
2. Login Vercel.
3. Add New Project.
4. Pilih repository.
5. Klik Deploy.

## 8. Catatan Penting

Project ini sengaja dibuat tanpa database online agar langsung berjalan. Setelah MVP siap, baru sambungkan Supabase/Firebase.
