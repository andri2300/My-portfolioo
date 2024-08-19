// Data produk kopi (contoh)
const products = [
    { nama: 'Kopi Arabika', harga: 15000 },
    { nama: 'Kopi Robusta', harga: 12000 },
    { nama: 'Kopi Luwak', harga: 50000 },
  ];
  
  // Menampilkan produk dalam container produk
  const produkContainer = document.getElementById('produk-container');
  
  products.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const productName = document.createElement('h3');
    productName.textContent = product.nama;
  
    const productPrice = document.createElement('p');
    productPrice.textContent = `Harga: Rp ${product.harga.toLocaleString()}`;
  
    card.appendChild(productName);
    card.appendChild(productPrice);
    produkContainer.appendChild(card);
  });
  