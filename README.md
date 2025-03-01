# Panduan Untuk Menjalan Semua Soal yang ada di Dalam Folder

### Hal Yang perlu dipersiapkan

- Node.js
- MySQL (XAMPP)

## Soal No 1 Front-End Membuat Halaman

Karena pada soal 1 hanya menggunakan HTML, CSS, dan JavaScript, maka tidak perlu mempersiapkan apa-apa selain membuka file HTML saja.

### Langkah-langkah:

1. Buka file `regist.html` di browser.
2. Formulir pendaftaran akan ditampilkan. Isi semua kolom dan klik tombol "Register".
3. Validasi form dilakukan menggunakan JavaScript yang ada di file `script.js`.

## Soal No 2 Back-End API Pengguna

Hal yang perlu dipersiapkan, dengan langkah berikut:

1. Install semua library yang dipakai dengan menjalankan perintah:
   ```sh
   npm install
   ```
2. Import file `.sql` ke DBMS MySQL / phpMyAdmin:
   - Buka phpMyAdmin.
   - Buat database baru dengan nama `db_test`.
   - Import file `db_test.sql` ke dalam database `db_test`.

### Langkah-langkah menjalankan server:

1. Pastikan MySQL server sudah berjalan.
2. Jalankan server dengan perintah:
   ```sh
   node server.js
   ```
3. Server akan berjalan di port 5000. Anda dapat mengakses API melalui `http://localhost:5000`.

### API Endpoints:

- **POST /users**: Menambahkan pengguna baru.
- **GET /users**: Mengambil semua pengguna (tanpa password).
- **GET /users/:id**: Mengambil pengguna berdasarkan ID (tanpa password).
- **DELETE /users/:id**: Menghapus pengguna berdasarkan ID.

### Contoh Penggunaan:

1. **Menambahkan pengguna baru**:

```sh
URL: http://localhost:5000/users
Method: POST
Headers:
Content-Type: application/json
Body (raw JSON):
```

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

2. **Mengambil Semua data user**

```sh
URL: http://localhost:5000/users
Method: GET
Headers:
Content-Type: application/json
```

3. **Mengambil 1 Data User**

```sh
URL: http://localhost:5000/users/1
Method: GET
Headers:
Content-Type: application/json
```

4. **Menghapus 1 Data User**

```sh
URL: http://localhost:5000/users/1
Method: DELETE
Headers:
Content-Type: application/json
```

## Soal No 3 Cari Angka

### Langkah-langkah:

1. Buka file `findNumber.py` di editor Python atau di [IDE PYTHON ONLINE](https://edube.org/sandbox)
2. Jalankan script dengan perintah:
   ```sh
   python findNumber.py
   ```
3. Script akan mencari angka yang hilang dalam array yang diberikan dan mencetak hasilnya.

## Soal No 4 Formula Perhitungan

### Langkah-langkah:

1. Buka file `hitungAngka.py` di editor Python atau di [IDE PYTHON ONLINE](https://edube.org/sandbox)
2. Jalankan script dengan perintah:
   ```sh
   python hitungAngka.py
   ```
3. Script akan mencari ekspresi matematika yang menggunakan semua angka dan operator (+, -, \*) sehingga menghasilkan nilai yang sesuai dengan target dan mencetak hasilnya.
