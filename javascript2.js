document.addEventListener('DOMContentLoaded', function () {
    // Verileri çekme ve kartları oluşturma fonksiyonunu tanımla

    // JSON dosyasından verileri çekme işlemi
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Verileri alıp doldurma işlemleri
            data.forEach(item => {
                // Modal HTML'i oluşturma
                var modalID = 'exampleModal-' + item.id; // Modal ID'sini oluşturma

                // 'startTime' değerini al
                const startTim = new Date(item.startTime);
                const endTim = new Date(item.endTime);

                // Yeni format için tarih ve saat parçalarını al
                const datePart = startTim.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
                const timePart = startTim.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
                //End Time için aynısı
                const datePart2 = endTim.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
                const timePart2 = endTim.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

                // Yeni formatı oluştur
                const newStartTime = `${datePart} ${timePart} (UTC)`;
                //End Time için
                const newEndTime = `${datePart2} ${timePart2} (UTC)`;

                // Yeni başlangıç zamanını JSON verisine ekleyelim
                item.startTime = newStartTime;
                //End Time için aynısı
                item.endTime = newEndTime;

                var newModalHTML = `
                <div class="modal fade" id="${modalID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="exampleModalLabel" style="margin-left: 60px;"> ${item.title}</h5>
                            <h3 class="light-font-modal"
                                style="position: relative; top: 5px; right: 50px; font-size: 12px;">Upcoming
                            </h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="popup">
                                <img src="${item.uploadedFile}" class="popup-img" alt="...">
                            </div>
                            <div class="text">
                                <br>
                                <div class="table-container mt-0">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Token Symbol</td>
                                                <td class="has-text-right" id="token-symbol">${item.tokenSymbol}</td>
                                            </tr>
                                            <tr>
                                                <td>Token Address</td>
                                                <td class="has-text-right"><a class="mr-1"
                                                        href="https://bscscan.com/address/${item.tokenAddress}"
                                                        target="_blank" rel="noreferrer nofollow"><span
                                                            class="ant-typography has-text-primary" id="token-address">${item.tokenAddress}
                                                        </span></a><br>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Total Supply</td>
                                                <td class="has-text-right" id="total-supply">${item.totalSupply}  ${item.tokenSymbol}</td>
                                            </tr>
                                            <tr>
                                                <td>Soft Cap</td>
                                                <td class="has-text-right" id="soft-cap">${item.softCap}</td>
                                            </tr>
                                            <tr>
                                                <td>Presale Start Time</td>
                                                <td class="has-text-right" id="start-time">${item.startTime}</td>
                                            </tr>
                                            <tr>
                                                <td>Presale End Time</td>
                                                <td class="has-text-right" id="end-time">${item.endTime}</td>
                                            </tr>
                                            <tr>
                                                <td>Listing On</td>
                                                <td class="has-text-right"><a class="mr-1"
                                                        href="${item.listingOn}"
                                                        target="_blank" rel="noreferrer nofollow" id="listing-on">Token</a></td>
                                            </tr>
                                            <tr>
                                                <td>Liquidity Percent</td>
                                                <td class="has-text-right" id="percent-liq">%${item.percentLiq}</td>
                                            </tr>
                                            <tr>
                                                <td>Liquidity Lockup Time 
                                                \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0</td>
                                                <td class="has-text-right" id="lockup-time">${item.lockupTime}</td>
                                            </tr>
                                            <tr>
                                                <td>Web Site</td>
                                                <td class="has-text-right"><a href="${item.website}" id="web-site">Web Site</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Telegram</td>
                                                <td class="has-text-right">
                                                    <a href="${item.telegram}" id="telegram">Telegram
                                                        <img src="images/telegram.png" style="height: 25px; width: 25px;">
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class="has-text-right">
                                                <a href=https://sepolia.etherscan.io/token/${item.tokenAddress} target="_blank"> 
                                                    <button type="button"
                                                        class="btn btn-grow btn-outline-warning btn-center">Buy
                                                        Token</button>
                                                        </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="cursor-pointer"
                                    style="position: absolute; width: 50%; height: 30%; top: 495px; left: 500px;">
                                    <div>
                                        <div class="text-center " id="gauge-chart1" style="width: 100%; ">
                                            <svg width="186" height="105.39999999999998">
                                                <g transform="scale(0.5)">
                                                    <g class="doughnut"
                                                        transform="translate(183.55624999999998, 183.55624999999998)">
                                                        <g class="arc">
                                                            <path
                                                                d="M-177.1586329428222,-5.876055232815265A6,6,0,0,1,-183.14519662422984,-12.277372175456776A183.55624999999998,183.55624999999998,0,0,1,-155.38403480878264,-97.71744286771688A6,6,0,0,1,-146.7782033584814,-99.37740321685303L-126.73422796342277,-84.81460266204994A6,6,0,0,1,-125.14748704587095,-76.8216148691471A146.845,146.845,0,0,0,-146.401056100805,-11.409855282559144A6,6,0,0,1,-152.38291681519658,-5.876055232815231Z"
                                                                style="fill: rgb(255, 77, 23);"></path>
                                                        </g>
                                                        <g class="arc">
                                                            <path
                                                                d="M-139.8704861434717,-108.88506030331979A6,6,0,0,1,-140.95111820550372,-117.58264834013818A183.55624999999998,183.55624999999998,0,0,1,-68.27145300547717,-170.38751602914874A6,6,0,0,1,-60.333488898844564,-166.6720713513866L-52.6773715675988,-143.10896508232932A6,6,0,0,1,-56.09183154605134,-135.70983921149343A146.845,146.845,0,0,0,-111.7343977141117,-95.2831485230453A6,6,0,0,1,-119.82651074841314,-94.32225974851663Z"
                                                                style="fill: rgb(255, 141, 24);"></path>
                                                        </g>
                                                        <g class="arc">
                                                            <path
                                                                d="M-49.15656766028629,-170.30367320503808A6,6,0,0,1,-44.91850338457932,-177.97534932611322A183.55624999999998,183.55624999999998,0,0,1,44.91850338457938,-177.9753493261132A6,6,0,0,1,49.15656766028633,-170.30367320503808L41.50045032904053,-146.74056693598078A6,6,0,0,1,34.38899711312628,-142.76151758283248A146.845,146.845,0,0,0,-34.388997113126244,-142.7615175828325A6,6,0,0,1,-41.5004503290405,-146.74056693598078Z"
                                                                style="fill: rgb(253, 183, 55);"></path>
                                                        </g>
                                                        <g class="arc">
                                                            <path
                                                                d="M60.33348889884462,-166.67207135138662A6,6,0,0,1,68.2714530054772,-170.38751602914874A183.55624999999998,183.55624999999998,0,0,1,140.95111820550378,-117.58264834013815A6,6,0,0,1,139.87048614347177,-108.88506030331973L119.8265107484132,-94.32225974851661A6,6,0,0,1,111.73439771411172,-95.28314852304528A146.845,146.845,0,0,0,56.091831546051374,-135.70983921149343A6,6,0,0,1,52.67737156759884,-143.1089650823293Z"
                                                                style="fill: rgb(174, 179, 53);"></path>
                                                        </g>
                                                        <g class="arc">
                                                            <path
                                                                d="M146.7782033584814,-99.37740321685304A6,6,0,0,1,155.38403480878262,-97.71744286771691A183.55624999999998,183.55624999999998,0,0,1,183.14519662422987,-12.277372175456742A6,6,0,0,1,177.1586329428222,-5.876055232815231L152.38291681519658,-5.876055232815231A6,6,0,0,1,146.40105610080502,-11.409855282559146A146.845,146.845,0,0,0,125.14748704587095,-76.82161486914708A6,6,0,0,1,126.7342279634228,-84.81460266204992Z"
                                                                style="fill: rgb(76, 180, 60);"></path>
                                                        </g>
                                                    </g>
                                                    <!-- Yeni kod parçası buraya eklendi -->
                                                    <g class="needle"
                                                        transform="translate(183.55624999999998, 183.55624999999998)">
                                                        <g id="rotateGroup">
                                                            <path
                                                                d="M -8.723868317955208 -15.661976187858464 L 73.59371118941678 -75.48109484194258 L 8.72386831795521 2.917976187858465"
                                                                fill="#FFFFFF"></path>
                                                            <circle cx="0" cy="-6.371999999999999" r="12.743999999999998"
                                                                fill="#e6522e">
                                                            </circle>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="text-center text-4xl font-semibold mb-1" style="color: rgb(128, 124, 124);"
                                        id="gauge-value">76
                                    </div>
                                    <div class="text-center text-2xl" style="color: rgb(174, 179, 53);" id="gauge-status">
                                        Greed
                                    </div>
                                    <div class="flex">
                                        <div class="flex-1 flex" style="color: rgb(76, 180, 60);">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="#4CB43C" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="0" y1="0" x2="0" y2="0"></line>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
                `;

                // Card HTML'i oluşturma
                var newCardHTML = `
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="btn btn-sm btn-grow" data-bs-toggle="modal" data-bs-target="#${modalID}">
                        <div class="card border border-green">
                            <div class="position-relative">
                                <img src="${item.uploadedFile}" class="card-img-top" alt="...">
            `;

                if (item.addFlame === "No") {
                    newCardHTML += `
                    <!-- Flame ikonunu eklemiyoruz -->
                `;
                } else if (item.addFlame === "on") {
                    newCardHTML += `
                    <img src="images/fire.png" class="small-icon mx-2 my-2">
                `;
                }

                newCardHTML += `
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-center">${item.title}</h5>
                                <p class="card-text">${item.description}</p>
                                <div class="text-center">
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <div>
                                            <div class="light-orange" style="position: absolute; left: 3%; top: 10px;" alt="Inactive Project"></div>
                                            <div class="light-font" style="position: absolute; left: 8.5%; top: 10px; font-size: 12px;" alt="Inactive Project">Upcoming</div>
                                        </div>
                                        <a href="https://sepolia.etherscan.io/token/${item.tokenAddress}" target="_blank" type="submit" class="btn btn-outline-primary rounded-5 align-self-center">Buy Now</a>

                                        <a href="${item.twitter}" class="align-self-center" target="_blank">
                                            <img src="images/twitter.png" style="height: 25px; width: 25px; ">
                                        </a>
                                        <a href="${item.telegram}" class="align-self-center" target="_blank">
                                            <img src="images/telegram.png " style="height: 25px; width: 25px;">
                                        </a>
                                        <span class="badge rounded-pill bg-success align-self-center">
                                            <p class="m-2" style="font-size: 9px;">Rating<br><span class="fs-2">${item.rating}</span></p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;




                // Oluşturulan HTML'i ekrana yerleştirme (örneğin, bir div içine)
                if (item.addFlame == "No") {
                    document.getElementById('cardContainer').insertAdjacentHTML('beforeend', newCardHTML);

                }
                else if (item.addFlame == "on") {
                    document.getElementById('cardContainer').insertAdjacentHTML('afterbegin', newCardHTML);

                }
                else {
                    console.log("hata");
                }
                document.getElementById('modal').innerHTML += newModalHTML;


                //upcoming ayarlama
                const currentTime = new Date(); // Geçerli zamanı al
                // Upcoming, active ve inactive durumlarına göre class değerlerini güncelleme
                const startTime = new Date(item.startTime);
                const endTime = new Date(item.endTime);

                // Upcoming, active ve inactive durumlarına göre class değerlerini güncelleme
                const colors = document.querySelector(`[data-bs-target="#${modalID}"] .light-orange`);
                const fonts = document.querySelector(`[data-bs-target="#${modalID}"] .light-font`);
                var lightFontModal = document.querySelector(`#${modalID} .light-font-modal`);
                updateTime(colors, startTime, endTime, currentTime, fonts, lightFontModal);

                //devam

                var rotateGroup = document.querySelector(`#${modalID} #rotateGroup`);
                var gaugeValueElement = document.querySelector(`#${modalID} #gauge-value`);
                var gaugeStatusElement = document.querySelector(`#${modalID} #gauge-status`);

                var value = parseFloat(item.fearGreed); // fearAndGreed değerini float'a çevir
                var rating = parseFloat(item.rating);

                // Oluşturulan kart elementini seç
                var cardElement = document.querySelector(`[data-bs-target="#${modalID}"] .card.border`);
                var cardElement2 = document.querySelector(`[data-bs-target="#${modalID}"] .badge.rounded-pill`);
                // Border rengini güncelle
                updateBorderColor(cardElement, rating);
                updateBgColor(cardElement2, rating);

                if (value >= 224 && value <= 260) {
                    rotateGroup.setAttribute('transform', 'rotate(' + value + ')');
                    gaugeValueElement.innerText = ((value - 214) / 2);
                    gaugeStatusElement.innerText = 'Extreme Fear';
                    gaugeStatusElement.style.color = ' rgb(255, 77, 23)';
                } else if (value >= 260 && value <= 295) {
                    rotateGroup.setAttribute('transform', 'rotate(' + value + ')');
                    gaugeValueElement.innerText = ((value - 204) / 2);
                    gaugeStatusElement.innerText = 'Fear';
                    gaugeStatusElement.style.color = ' rgb(255, 141, 24)';
                } else if (value >= 296 && value <= 334) {
                    rotateGroup.setAttribute('transform', 'rotate(' + value + ')');
                    gaugeValueElement.innerText = ((value - 204) / 2);
                    gaugeStatusElement.innerText = 'Neutral';
                    gaugeStatusElement.style.color = ' rgb(253, 183, 55)';
                } else if (value >= 334 && value <= 370) {
                    rotateGroup.setAttribute('transform', 'rotate(' + value + ')');
                    gaugeValueElement.innerText = ((value - 204) / 2);
                    gaugeStatusElement.innerText = 'Greed';
                    gaugeStatusElement.style.color = ' rgb(174, 179, 53)';
                } else if (value >= 371 && value <= 403) {
                    rotateGroup.setAttribute('transform', 'rotate(' + value + ')');
                    gaugeValueElement.innerText = ((value - 204) / 2);
                    gaugeStatusElement.innerText = 'Extreme Greed';
                    gaugeStatusElement.style.color = 'rgb(76, 180, 60)';
                } else {
                    console.log(`Hata: ${item.id}`);
                }
            });
            // Border rengini güncellemek için bir fonksiyon
            function updateBorderColor(cardElement, rating) {
                if (rating >= 0 && rating < 3) {
                    cardElement.classList.remove("border-green", "border-gold");
                    cardElement.classList.add("border-red");
                } else if (rating >= 3 && rating < 4.5) {
                    cardElement.classList.remove("border-red", "border-gold");
                    cardElement.classList.add("border-green");
                } else if (rating >= 4.5 && rating <= 5) {
                    cardElement.classList.remove("border-red", "border-green");
                    cardElement.classList.add("border-gold");
                }
            }
            function updateBgColor(cardElement2, rating) {
                if (rating >= 0 && rating < 3) {
                    cardElement2.classList.remove("bg-success");
                    cardElement2.classList.add("bg-danger");
                } else if (rating >= 3 && rating <= 5) {
                    cardElement2.classList.remove("bg-danger");
                    cardElement2.classList.add("bg-success");
                }
            }
            function updateTime(colors, startTime, endTime, currentTime, fonts, lightFontModal) {
                if (currentTime < startTime) {
                    colors.classList.add("light-orange");
                    colors.classList.remove("light-green");
                    colors.classList.remove("light-red");
                    fonts.innerText = 'Upcoming';
                    fonts.style.color = 'orange';
                    lightFontModal.innerText = 'Upcoming';
                    lightFontModal.style.color = 'orange';
                } else if (currentTime >= startTime && currentTime <= endTime) {
                    colors.classList.add("light-green");
                    colors.classList.remove("light-orange");
                    colors.classList.remove("light-red");
                    fonts.innerText = 'Active';
                    fonts.style.color = 'green';
                    lightFontModal.innerText = 'Active';
                    lightFontModal.style.color = 'green';
                } else {
                    colors.classList.add("light-red");
                    colors.classList.remove("light-orange");
                    colors.classList.remove("light-green");
                    fonts.innerText = 'Ended';
                    fonts.style.color = 'red';
                    lightFontModal.innerText = 'Ended';
                    lightFontModal.style.color = 'red';
                }
            }
            function updateModalTextAndColor(modalID) {
                var modalTitle = document.querySelector(`#${modalID} .modal-title`);
                var lightFontModal = document.querySelector(`#${modalID} .light-font-modal`);
                if (modalTitle && lightFontModal) {
                    modalTitle.innerText = 'text';
                    lightFontModal.innerText = text;
                    lightFontModal.style.color = color;
                }
            }
        })
        .catch(error => {
            console.error('Veri çekme hatası:', error);
        });

});

