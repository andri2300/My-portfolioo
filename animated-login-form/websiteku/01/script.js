document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("login-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Menghentikan pengiriman form secara default
  
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      // Validasi username dan password
      if (username === 'andri' && password === '1234') {
        alert('Login berhasil!');
        window.location.href = 'branda.html'; // Redirect ke halaman branda.html
      } else {
        alert('Username atau password salah!');
      }
    });
  });
  