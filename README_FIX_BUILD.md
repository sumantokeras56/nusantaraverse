# Nusantaraverse V2 - Build Fix

Gunakan patch ini jika Vercel menampilkan error:

- Build failed because of webpack errors
- Command "npm run build" exited with 1
- Build berhenti lama pada "Collecting build traces"

## Cara pakai

1. Copy file `next.config.mjs` dari folder patch ini.
2. Paste ke root project lama:
   `C:\Users\Asus\Documents\nusantaraverse-starter`
3. Pilih Replace file.
4. Jalankan di VS Code:

```powershell
npm run build
```

5. Jika berhasil, push ulang:

```powershell
git add .
git commit -m "Fix Vercel build config"
git push
```

Vercel akan deploy ulang otomatis.
