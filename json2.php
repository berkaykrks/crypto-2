<?php
// Dosya adı
$file = 'data.json';

// Seçilen öğe kimliği
$selectedId = $_POST['selectedId'] ?? '';
// Alev durumu
$flameStatus = isset($_POST['flameStatus']) && $_POST['flameStatus'] === 'on' ? 'on' : 'No';

// Değişiklikleri uygula
if ($selectedId !== '') {
    // JSON dosyasını oku
    $jsonData = file_get_contents($file);

    // JSON verisini diziye dönüştür
    $data = json_decode($jsonData, true);

    // Veriyi güncelle
    $updated = false;
    foreach ($data as &$item) {
        if ($item['id'] == $selectedId) {
            $item['addFlame'] = $flameStatus;
            $updated = true;
            break; // Döngüyü sonlandır
        }
    }

    // Veri güncellendi mi?
    if ($updated) {
        // Veriyi JSON formatına dönüştür
        $updatedJsonData = json_encode($data, JSON_PRETTY_PRINT);

        // Veriyi JSON dosyasına yaz
        file_put_contents($file, $updatedJsonData);

        echo "Alev durumu başarıyla güncellendi.";
    } else {
        echo "Öğe bulunamadı.";
    }
} else {
    echo "Geçersiz kimlik.";
}
?>
