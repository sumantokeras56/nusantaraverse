# Rancangan Database Supabase — Nusantaraverse

MVP saat ini menggunakan data lokal. Jika ingin memakai Supabase, buat tabel berikut.

## 1. users

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key |
| name | text | nama user |
| email | text | email user |
| role | text | student/teacher/admin |
| class_name | text | kelas siswa |
| created_at | timestamp | waktu dibuat |

## 2. locations

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key |
| name | text | nama lokasi |
| province | text | provinsi |
| description | text | deskripsi lokasi |
| image_url | text | gambar |
| latitude | numeric | koordinat |
| longitude | numeric | koordinat |

## 3. missions

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key |
| location_id | uuid | relasi ke locations |
| title | text | judul misi |
| description | text | deskripsi misi |
| xp_reward | integer | XP |
| difficulty | text | easy/medium/hard |

## 4. simulations

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key |
| mission_id | uuid | relasi ke missions |
| scenario | text | skenario kasus |
| option_a | text | pilihan 1 |
| option_b | text | pilihan 2 |
| option_c | text | pilihan 3 |
| best_option | text | pilihan terbaik |

## 5. simulation_results

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key |
| user_id | uuid | relasi ke users |
| simulation_id | uuid | relasi ke simulations |
| selected_option | text | pilihan siswa |
| economy_score | integer | skor ekonomi |
| environment_score | integer | skor lingkungan |
| social_score | integer | skor sosial |
| sustainability_score | integer | skor keberlanjutan |
| total_score | integer | total skor |
| feedback | text | feedback |
| created_at | timestamp | waktu |

## 6. badges

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key |
| name | text | nama badge |
| description | text | deskripsi |
| icon_url | text | ikon |
| xp_required | integer | syarat XP |

## 7. user_progress

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key |
| user_id | uuid | relasi ke users |
| mission_id | uuid | relasi ke missions |
| status | text | not_started/in_progress/completed |
| xp_earned | integer | XP diperoleh |
| completed_at | timestamp | waktu selesai |

## 8. chat_logs

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | uuid | primary key |
| user_id | uuid | relasi ke users |
| question | text | pertanyaan siswa |
| answer | text | jawaban AI |
| topic | text | topik |
| created_at | timestamp | waktu |
