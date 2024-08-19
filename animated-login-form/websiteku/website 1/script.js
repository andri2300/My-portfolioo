function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Validasi username dan password
    if (username === 'orangsaya' && password === 'sayasayangkamu123') {
      alert('Login berhasil!');
      window.location.href = 'game1'; // Redirect ke halaman rt.html
      return true; // Form disubmit
    } else {
      alert('Username atau password salah!');
      return false; // Form tidak disubmit
    }
  }
  