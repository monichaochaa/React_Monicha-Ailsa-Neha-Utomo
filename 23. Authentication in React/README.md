# React_Monicha-Ailsa-Neha-Utomo

# Authentication in React

## Authentication (Otentikasi)

### Definisi
Proses untuk memverifikasi identitas pengguna dengan menggunakan informasi kredensial seperti username dan password.

### Implementasi di React
Biasanya menggunakan Context API dan hooks (`useState`, `useEffect`) untuk mengelola status otentikasi di seluruh aplikasi. Pengembang dapat membuat fungsi untuk menangani login, logout, dan penyimpanan token.

---

## Authorization (Otorisasi)

### Definisi
Proses yang menentukan hak akses pengguna setelah mereka berhasil terotentikasi. Otorisasi mengatur apa yang dapat dilakukan pengguna dalam aplikasi.

### Perlindungan Rute
Dalam React, rute yang memerlukan otorisasi dapat dilindungi menggunakan library seperti `react-router-dom`. Pengembang dapat membuat komponen yang memeriksa status otentikasi dan mengarahkan pengguna ke halaman login jika mereka tidak memiliki akses.

---

## Login with React

### Proses Login
Melibatkan pembuatan formulir login yang meminta kredensial pengguna. Setelah pengguna mengirimkan formulir, aplikasi akan mengirim permintaan ke API backend untuk memvalidasi kredensial.

### Penyimpanan Token
Jika otentikasi berhasil, token (seperti JWT) dapat disimpan dalam `localStorage` atau cookie untuk menjaga sesi pengguna dan memberikan akses yang aman ke fitur aplikasi. Token ini juga harus ditambahkan ke header permintaan untuk API yang membutuhkan otorisasi.
