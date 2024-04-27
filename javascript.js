/*Zamanlayıcı ile yanıp sönen ışık*/

// Belirli bir süre boyunca işlevi çalıştıracak olan zamanlayıcıyı tanımla
var zamanlayici = setInterval(degistirRenk, 10000); // 10000 milisaniye (10 saniye) aralıklarla çalışacak

// İşlevi belirli bir süre sonra durdurmak için bir zamanlayıcı oluştur
setTimeout(function () {
  clearInterval(zamanlayici); // Zamanlayıcıyı durdur
}, 10000); // 10000 milisaniye (10 saniye) sonra duracak

// İşlevi tanımla
function degistirRenk() {
  var divElementi = document.getElementById("activeProject");
  // Eğer div elementinin sınıfı "light-green" ise, "light-blue" yap; aksi takdirde "light-green" yap
  if (divElementi.classList.contains("light-green")) {
    divElementi.classList.remove("light-green");
    divElementi.classList.add("light-blue");
  } else {
    divElementi.classList.remove("light-blue");
    divElementi.classList.add("light-green");
  }
}


// Butona tıklandığında modalı aç
document.querySelectorAll('.btn-grow').forEach(button => {
  button.addEventListener('click', function () {
    // data-bs-target'taki modal id'sini al
    const targetModalId = this.getAttribute('data-bs-target');
    // İlgili modalı aç
    const modal = new bootstrap.Modal(document.querySelector(targetModalId));
    modal.show();
  });
});

//NAVBAR İÇİNE CRYPTO BİLGİLERİ OTOMATİK GİRME
function formatMarketCap(marketCap) {
  const billion = 1000000000;
  const trillion = 1000000000000;

  if (marketCap >= trillion) {
    return `$${(marketCap / trillion).toFixed(2)}T+`;
  } else if (marketCap >= billion) {
    return `$${(marketCap / billion).toFixed(2)}B+`;
  } else {
    return `$${marketCap}`;
  }
}

function fetchCryptoData() {
  fetch('https://api.coingecko.com/api/v3/global') // Replace with the updated URL for global data
    .then(response => response.json())
    .then(data => {
      const totalCryptos = data.data.active_cryptocurrencies.toLocaleString();
      const marketCap = formatMarketCap(data.data.total_market_cap.usd);

      const btcDominance = data.data.market_cap_percentage.btc.toFixed(2);
      const ethDominance = data.data.market_cap_percentage.eth.toFixed(2);

      const cryptoInfo = document.getElementById("crypto-info");
      cryptoInfo.innerHTML = `
          <p>Cryptos: ${totalCryptos} | Market Cap: ${marketCap} | Dominance: BTC: ${btcDominance}% ETH: ${ethDominance}%</p>
        `;
    })
    .catch(error => {
      console.error('Error fetching crypto data:', error);
    });
}


document.addEventListener("DOMContentLoaded", fetchCryptoData);

//btc - eth fiyatlarını çekme

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {
      const bitcoinPrice = data["bitcoin"]["usd"];
      const ethereumPrice = data["ethereum"]["usd"];

      // Bitcoin ve Ethereum fiyatlarını navbar içine yerleştirme
      const bitcoinNavbar = document.querySelector('a[data-value="bitcoin-price"]');
      bitcoinNavbar.textContent = `BTC: $${bitcoinPrice}`;

      const ethereumNavbar = document.querySelector('a[data-value="binance-value"]');
      ethereumNavbar.textContent = `ETH: $${ethereumPrice}`;
    })
    .catch(error => console.error("Error fetching data:", error));
});



/*JSONDAKİ DOSYALAR */
// JSON dosyasından verileri çekme işlemi
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Verileri alıp seçim menüsüne ekleyerek işlemleri gerçekleştirme
    const itemSelector = document.getElementById('itemSelector');

    // data.json'daki her bir öğe için bir seçenek oluştur
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id; // Öğenin kimliğini seçenek değeri olarak ayarla
      option.textContent = item.title; // Öğenin başlığını seçeneğin metni olarak ayarla
      itemSelector.appendChild(option); // Seçeneği seçim menüsüne ekle
    });
  })
  .catch(error => {
    console.error('Veri çekme hatası:', error);
  });

