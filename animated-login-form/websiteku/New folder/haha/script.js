function kFoldSplit(data, k) {
    const subsets = [];
    const subsetSize = Math.floor(data.length / k);
    let start = 0;

    for (let i = 0; i < k; i++) {
        const end = i < k - 1 ? start + subsetSize : data.length;
        const testSet = data.slice(start, end);
        const trainSet = data.slice(0, start).concat(data.slice(end));
        subsets.push({ trainSet, testSet });
        start = end;
    }

    return subsets;
}

function kFoldCrossValidation(model, X, y, k) {
    const subsets = kFoldSplit(X, k);
    const accuracies = [];

    subsets.forEach(subset => {
        const trainX = subset.trainSet;
        const trainY = subset.trainSet;
        const testX = subset.testSet;
        const testY = subset.testSet;

        model.fit(trainX, trainY); // Asumsikan ada method .fit() pada model
        const accuracy = model.evaluate(testX, testY); // Asumsikan ada method .evaluate() pada model
        accuracies.push(accuracy);
    });

    return accuracies;
}

function runCrossValidation() {
    const kValue = parseInt(document.getElementById("k-value").value);
    const model = new YourModel(); // Ganti dengan model Anda
    const X = yourFeatures; // Ganti dengan fitur Anda
    const y = yourLabels; // Ganti dengan label Anda

    const accuracies = kFoldCrossValidation(model, X, y, kValue);

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "";
    accuracies.forEach((accuracy, index) => {
        const foldNumber = index + 1;
        resultContainer.innerHTML += `<p>Accuracy (Fold ${foldNumber}): ${accuracy}</p>`;
    });

    const meanAccuracy = accuracies.reduce((a, b) => a + b, 0) / accuracies.length;
    resultContainer.innerHTML += `<p><strong>Mean Accuracy:</strong> ${meanAccuracy}</p>`;
}
