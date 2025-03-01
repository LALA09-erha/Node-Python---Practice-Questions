from itertools import permutations, product  # Mengimpor fungsi untuk membuat permutasi angka dan kombinasi operator

def generate_parentheses(expression):
    """Menambahkan tanda kurung untuk mempertimbangkan prioritas operator (* lebih kuat)."""
    tokens = expression.split()  # Memisahkan angka dan operator dalam ekspresi menjadi list
    num_count = (len(tokens) + 1) // 2  # Menghitung jumlah angka dalam ekspresi
    
    if num_count == 2:
        return [expression]  # Jika hanya ada dua angka, tidak perlu tanda kurung

    
    parenthesized_expressions = set()  # Menggunakan set agar ekspresi unik (tidak ada duplikasi)

    # Coba semua cara menambahkan tanda kurung untuk mempertimbangkan prioritas operator

    # memberikan tanda kurung pada semua part yang ada 
    for i in range(0, len(tokens) - 2, 2):  # Iterasi setiap operator dalam ekspresi
        left_part = " ".join(tokens[:i+2])  # Bagian kiri dari ekspresi
        right_part = " ".join(tokens[i+2:])  # Bagian kanan dari ekspresi
        parenthesized_expressions.add(f"({left_part}) {right_part}")  # Tambahkan tanda kurung di kiri
        parenthesized_expressions.add(f"{left_part} ({right_part})")  # Tambahkan tanda kurung di kanan

    return parenthesized_expressions  # Mengembalikan semua kemungkinan ekspresi dengan tanda kurung

def find_expression(numbers, target):
    """
    Mencari ekspresi matematika yang menggunakan semua angka dan operator (+, -, *)
    sehingga menghasilkan nilai yang sesuai dengan target.
    """
    operators = ['+', '-', '*']  # Daftar operator yang akan digunakan
    n = len(numbers) - 1  # Banyaknya operator yang dibutuhkan (jumlah angka - 1)

    # Looping untuk mencoba semua kemungkinan urutan angka
    for num_perm in permutations(numbers):
        # Looping untuk mencoba semua kemungkinan kombinasi operator
        for ops in product(operators, repeat=n):
            expression = str(num_perm[0])  # Memulai ekspresi dengan angka pertama

            # Membangun ekspresi dari angka dan operator yang dipilih
            for i in range(n):
                expression += f" {ops[i]} {num_perm[i + 1]}"
            
            if(eval(expression) == target):  # Jika hasil ekspresi sama dengan target
                return expression  # Langsung return ekspresi yang ditemukan

            # Menambahkan kemungkinan tanda kurung untuk memperhitungkan prioritas operator
            possible_expressions = generate_parentheses(expression)
            possible_expressions.add(expression)  # Masukkan ekspresi awal juga

            # Evaluasi semua kemungkinan ekspresi
            for exp in possible_expressions:
                try:
                    result = eval(exp)  # Mengevaluasi ekspresi menjadi hasil matematis
                    if result == target:  # Jika hasil sesuai target
                        return exp  # Langsung return ekspresi yang ditemukan
                except Exception:
                    continue  # Abaikan error jika ada operasi yang tidak valid

    return None  # Jika tidak ada ekspresi yang menghasilkan target

# Contoh penggunaan
numbers = [1, 4, 5, 6]  # Daftar angka yang diberikan
target = 50  # Target hasil yang ingin dicapai

expression = find_expression(numbers, target)  # Mencari ekspresi yang sesuai

# Menampilkan hasil
if expression:
    print(f"Ekspresi yang menghasilkan {target}: {expression}")  # Jika ditemukan, cetak ekspresinya
else:
    print(f"Tidak ada ekspresi yang menghasilkan {target}")  # Jika tidak ditemukan, cetak pesan ini
