// Fungsi untuk melakukan regresi linier sederhana
function linearRegression(x, y) {
    const n = x.length;
    let sumX = 0,
      sumY = 0,
      sumXY = 0,
      sumXSquare = 0;
  
    for (let i = 0; i < n; i++) {
      sumX += x[i];
      sumY += y[i];
      sumXY += x[i] * y[i];
      sumXSquare += x[i] ** 2;
    }
  
    const slope = (n * sumXY - sumX * sumY) / (n * sumXSquare - sumX ** 2);
    const intercept = (sumY - slope * sumX) / n;
  
    return { slope, intercept };
  }
  
  // Fungsi untuk memprediksi kadar kolesterol
  function predictCholesterol() {
    const age = parseFloat(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const diet = parseFloat(document.getElementById('diet').value);
  
    // Data latih (contoh data, biasanya ini akan berdasarkan data yang lebih besar dan bervariasi)
    const ages = [30, 40, 50, 60, 70];
    const activities = [3, 4, 5, 6, 7];
    const diets = [7, 8, 6, 5, 4];
    const cholesterols = [180, 190, 200, 210, 220];
  
    // Melakukan regresi linier pada data latih
    const { slopeAge, interceptAge } = linearRegression(ages, cholesterols);
    const { slopeActivity, interceptActivity } = linearRegression(activities, cholesterols);
    const { slopeDiet, interceptDiet } = linearRegression(diets, cholesterols);
  
    // Melakukan prediksi berdasarkan regresi linier
    const predictedCholesterol = slopeAge * age + interceptAge +
      slopeActivity * activity + interceptActivity +
      slopeDiet * diet + interceptDiet;
  
    document.getElementById('result').innerText = `Predicted Cholesterol Level: ${predictedCholesterol.toFixed(2)}`;
  }
  