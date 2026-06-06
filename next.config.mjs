/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fix untuk Vercel/Windows build yang berhenti/gagal pada tahap "Collecting build traces".
  // Project Nusantaraverse masih demo lokal tanpa serverless dependency khusus,
  // jadi aman untuk menonaktifkan output file tracing pada versi MVP ini.
  outputFileTracing: false
};

export default nextConfig;
