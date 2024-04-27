<?php
// Dosya adı
$file = 'data.json';

// Dosyadaki veri sayısını al
$lastId = count(json_decode(file_get_contents($file), true));

// Yeni ID'yi hesapla
$newId = $lastId + 1;

// Yüklü dosyanın adı
$uploadedFileName = '';

// Dosya yüklendi mi kontrol et
if (isset($_FILES['fileToUpload']) && $_FILES['fileToUpload']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = 'images/'; // Dosyanın kaydedileceği klasörü belirle
    $uploadedFileName = $uploadDir . basename($_FILES['fileToUpload']['name']);
    // Dosyayı klasöre kaydet
    if (!move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $uploadedFileName)) {
        // Dosya kaydedilemedi, bir hata oluştu
        echo "Dosya kaydedilemedi.";
    }
}

// Yeni veriyi oluştur
$newData = array(
    'id' => $newId, // Yeni ID
    'title' => $_POST['title'] ?? '',
    'description' => $_POST['description'] ?? '',
    'rating' => $_POST['rating'] ?? '',
    'tokenSymbol' => $_POST['token-symbol'] ?? '',
    'tokenAddress' => $_POST['token-address'] ?? '',
    'totalSupply' => $_POST['total-supply'] ?? '',
    'softCap' => $_POST['soft-cap'] ?? '',
    'startTime' => $_POST['start-time'] ?? '',
    'endTime' => $_POST['end-time'] ?? '',
    'listingOn' => $_POST['listing-on'] ?? '',
    'percentLiq' => $_POST['percent-liq'] ?? '',
    'lockupTime' => $_POST['lockup-time'] ?? '',
    'website' => $_POST['web-site'] ?? '',
    'telegram' => $_POST['telegram'] ?? '',
    'twitter' => $_POST['twitter'] ?? '',
    'fearGreed' => $_POST['fear-greed'] ?? '',
    'addFlame' => isset($_POST['add-flame']) ? $_POST['add-flame'] : 'No', // Alev eklenecek mi?
    'uploadedFile' => $uploadedFileName // Yüklenen dosyanın adı
);

// Önceki verileri al
$existingData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

// Yeni veriyi eski verilere ekle
$existingData[] = $newData;

// Veriyi JSON formatına çevir
$jsonData = json_encode($existingData, JSON_PRETTY_PRINT);

// JSON verilerini dosyaya yaz
file_put_contents($file, $jsonData);

echo "Veri başarıyla kaydedildi.";
?>
