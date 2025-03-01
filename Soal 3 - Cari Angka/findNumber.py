def cari_angka(arr):
    # Mengurutkan array agar mudah dicari
    arr.sort()

    # Mencari angka yang sama dengan angka setelahnya
    for i in range(len(arr) - 1):
        # jika angka setelahnya tidak sama dengan angka sekarang ditambah 1, maka mengembalikan angka sekarang ditambah 1
        if arr[i] + 1 != arr[i + 1]:
            return arr[i] + 1

    # Jika tidak ditemukan angka yang sama, mengembalikan None
    return None

# Contoh penggunaan
print(cari_angka([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]))  
print(cari_angka([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])) 
print(cari_angka([3, 0, 2, 4]))  