# Update V2 Nusantaraverse — Fitur yang Disempurnakan

Versi ini menyempurnakan MVP Nusantaraverse agar lebih siap demo LIDM.

## Fitur Baru / Disempurnakan

1. Login demo siswa dan guru dengan penyimpanan role lokal.
2. Penyimpanan progress menggunakan localStorage.
3. XP, level, badge, dan misi selesai tersimpan otomatis.
4. Semua lokasi utama memiliki misi.
5. Semua misi memiliki simulasi keputusan.
6. Simulasi keputusan menyimpan hasil ke progress siswa.
7. Dashboard siswa dinamis berdasarkan data progress.
8. AI Tutor menyimpan riwayat chat.
9. Riwayat chat dapat diunduh.
10. Pre-test dan post-test tersedia dalam web.
11. Dashboard guru membaca data demo siswa.
12. Laporan guru dapat dicetak atau diunduh CSV.
13. Leaderboard dinamis memasukkan user demo.
14. Halaman progress siswa tersedia.
15. Eksplorasi virtual ditingkatkan dengan hotspot.
16. PWA manifest dan service worker ditambahkan.

## Cara Update ke GitHub dan Vercel

Setelah menyalin file V2 ke folder project lama, jalankan:

```powershell
git add .
git commit -m "Upgrade Nusantaraverse V2 complete demo features"
git push
```

Vercel akan otomatis deploy ulang.

## Alur Demo yang Disarankan

1. Buka Landing Page.
2. Klik Masuk Demo.
3. Masuk sebagai Siswa.
4. Kerjakan Pre-Test.
5. Buka Dashboard Siswa.
6. Pilih misi Rawa Singkil.
7. Tanya AI Tutor.
8. Jalankan Simulasi Keputusan.
9. Simpan hasil dan ambil XP.
10. Kerjakan Post-Test.
11. Buka Progress Siswa.
12. Buka Dashboard Guru.
13. Unduh laporan CSV atau cetak laporan.

## Catatan Teknis

Versi ini masih belum menggunakan database eksternal. Semua data demo disimpan di browser agar stabil untuk presentasi awal. Jika ingin lanjut ke versi database, gunakan Supabase atau Firebase pada tahap berikutnya.
