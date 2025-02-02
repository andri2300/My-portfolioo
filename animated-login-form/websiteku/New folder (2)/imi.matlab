% Inisialisasi data warna
colors = [
    1 0 0;   % Merah
    0 1 0;   % Hijau
    0 0 1;   % Biru
    1 1 0;   % Kuning
    1 0 1;   % Magenta
    0 1 1    % Cyan
];

% Inisialisasi parameter jaringan
numNeurons = 3;
learningRate = 0.1;
numIterations = 100;

% Inisialisasi bobot awal secara acak
weights = rand(numNeurons, size(colors, 2));

% Proses training
for iteration = 1:numIterations
    % Looping untuk setiap data warna
    for i = 1:size(colors, 1)
        % Hitung jarak antara data warna dan bobot
        distances = sqrt(sum((weights - colors(i, :)).^2, 2));
        
        % Temukan neuron pemenang (yang jaraknya paling dekat)
        [~, winnerNeuron] = min(distances);
        
        % Update bobot neuron pemenang dan tetangganya
        for j = 1:numNeurons
            % Hitung jarak antara neuron pemenang dengan neuron tetangga
            distanceToWinner = abs(j - winnerNeuron);
            
            % Hitung faktor pembelajaran berdasarkan jarak
            learningFactor = exp(-(distanceToWinner^2) / (2 * learningRate^2));
            
            % Update bobot neuron
            weights(j, :) = weights(j, :) + learningFactor * (colors(i, :) - weights(j, :));
        end
    end
end

% Hasil akhir pengelompokan warna
disp('Pengelompokan Warna dengan Jaringan Kohonen:');
for i = 1:size(colors, 1)
    distances = sqrt(sum((weights - colors(i, :)).^2, 2));
    [~, cluster] = min(distances);
    disp(['Warna [', num2str(colors(i, :)), '] termasuk ke dalam cluster ', num2str(cluster)]);
end

% Tampilkan scatter plot untuk hasil pengelompokan warna
figure;
scatter(weights(:, 1), weights(:, 2), 100, 'filled');
colormap(colors);
xlabel('Nilai Bobot Neuron 1');
ylabel('Nilai Bobot Neuron 2');
title('Pengelompokan Warna dengan Jaringan Kohonen');
