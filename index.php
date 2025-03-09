<?php
$koneksi = new mysqli("localhost", "root", "", "portofolio_dpkb");

if ($koneksi->connect_error) {
    echo "<script>alert('Koneksi gagal!');</script>";
    exit();
}

if (isset($_POST['message'])) {
    $nama = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $kirim = mysqli_query($koneksi, "INSERT INTO contact (name, email, message) VALUES ('$nama', '$email', '$message')");

    if ($kirim) {
        echo "<script>
                alert('Data berhasil dikirim!');
                window.location.href = 'index.html'; // Redirect ke halaman utama
              </script>";
    } else {
        echo "<script>
                alert('Gagal mengirim data');
                window.location.href = 'index.html'; // Tetap kembali ke halaman utama
              </script>";
    }
}
?>
