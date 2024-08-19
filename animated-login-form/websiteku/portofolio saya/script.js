function activateNeon(element) {
    // Mendapatkan posisi dan lebar tombol yang diklik
    const rect = element.getBoundingClientRect();
    const line = document.querySelector('.neon-line');
    
    // Mengatur lebar garis neon sesuai dengan lebar tombol yang diklik
    line.style.width = rect.width + 'px';
    
    // Mengatur posisi garis neon agar sejajar dengan tombol yang diklik
    line.style.left = (rect.left - element.offsetLeft) + 'px';
  }
  