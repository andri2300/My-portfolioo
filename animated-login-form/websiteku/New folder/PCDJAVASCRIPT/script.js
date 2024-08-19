const imgInput1 = document.getElementById('imgInput1');
const imgInput2 = document.getElementById('imgInput2');
const outputCanvas = document.getElementById('outputCanvas');
const ctx = outputCanvas.getContext('2d');
let imgData1, imgData2;

imgInput1.addEventListener('change', handleImage1, false);
imgInput2.addEventListener('change', handleImage2, false);

function handleImage1(e) {
  loadImage(e.target.files[0], 1);
}

function handleImage2(e) {
  loadImage(e.target.files[0], 2);
}

function loadImage(file, imgNum) {
  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      if (imgNum === 1) {
        outputCanvas.width = img.width;
        outputCanvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        imgData1 = ctx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
      } else if (imgNum === 2) {
        ctx.drawImage(img, 0, 0);
        imgData2 = ctx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
      }
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(file);
}

function addOperation(operation) {
  if (imgData1 && imgData2) {
    let imageData = ctx.createImageData(outputCanvas.width, outputCanvas.height);
    for (let i = 0; i < imgData1.data.length; i += 4) {
      let pixelValue = applyOperation(imgData1.data[i], imgData1.data[i + 1], imgData1.data[i + 2],
                                      imgData2.data[i], imgData2.data[i + 1], imgData2.data[i + 2],
                                      operation);
      imageData.data[i] = pixelValue.r;
      imageData.data[i + 1] = pixelValue.g;
      imageData.data[i + 2] = pixelValue.b;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  } else {
    alert('Silakan pilih kedua gambar terlebih dahulu!');
  }
}

function applyOperation(r1, g1, b1, r2, g2, b2, operation) {
  switch (operation) {
    case 'add':
      return { r: r1 + r2, g: g1 + g2, b: b1 + b2 };
    case 'subtract':
      return { r: Math.abs(r1 - r2), g: Math.abs(g1 - g2), b: Math.abs(b1 - b2) };
    case 'multiply':
      return { r: (r1 * r2) / 255, g: (g1 * g2) / 255, b: (b1 * b2) / 255 };
    case 'divide':
      return { r: (r1 / r2) * 255, g: (g1 / g2) * 255, b: (b1 / b2) * 255 };
    case 'and':
      return { r: r1 & r2, g: g1 & g2, b: b1 & b2 };
    case 'or':
      return { r: r1 | r2, g: g1 | g2, b: b1 | b2 };
    case 'xor':
      return { r: r1 ^ r2, g: g1 ^ g2, b: b1 ^ b2 };
    default:
      return { r: r1, g: g1, b: b1 };
  }
}
