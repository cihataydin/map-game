// --- Veri Tanımlamaları ---

const provincesData = [
    // Tam 81 il listesini buraya ekleyin
    { name: "Adana", region: "Akdeniz" },
    { name: "Adiyaman", region: "Güneydoğu Anadolu" },
    { name: "Afyonkarahisar", region: "Ege" },
    { name: "Agri", region: "Doğu Anadolu" },
    { name: "Amasya", region: "Karadeniz" },
    { name: "Ankara", region: "İç Anadolu" },
    { name: "Antalya", region: "Akdeniz" },
    { name: "Artvin", region: "Karadeniz" },
    { name: "Aydin", region: "Ege" },
    { name: "Balikesir", region: "Marmara" },
    { name: "Bilecik", region: "Marmara" },
    { name: "Bingol", region: "Doğu Anadolu" },
    { name: "Bitlis", region: "Doğu Anadolu" },
    { name: "Bolu", region: "Karadeniz" },
    { name: "Burdur", region: "Akdeniz" },
    { name: "Bursa", region: "Marmara" },
    { name: "Canakkale", region: "Marmara" },
    { name: "Cankiri", region: "İç Anadolu" },
    { name: "Corum", region: "Karadeniz" },
    { name: "Denizli", region: "Ege" },
    { name: "Diyarbakir", region: "Güneydoğu Anadolu" },
    { name: "Edirne", region: "Marmara" },
    { name: "Elazig", region: "Doğu Anadolu" },
    { name: "Erzincan", region: "Doğu Anadolu" },
    { name: "Erzurum", region: "Doğu Anadolu" },
    { name: "Eskisehir", region: "İç Anadolu" },
    { name: "Gaziantep", region: "Güneydoğu Anadolu" },
    { name: "Giresun", region: "Karadeniz" },
    { name: "Gümüşhane", region: "Karadeniz" },
    { name: "Hakkari", region: "Doğu Anadolu" },
    { name: "Hatay", region: "Akdeniz" },
    { name: "Isparta", region: "Akdeniz" },
    { name: "Mersin", region: "Akdeniz" },
    { name: "Istanbul", region: "Marmara" },
    { name: "Izmir", region: "Ege" },
    { name: "Kars", region: "Doğu Anadolu" },
    { name: "Kastamonu", region: "Karadeniz" },
    { name: "Kayseri", region: "İç Anadolu" },
    { name: "Kirklareli", region: "Marmara" },
    { name: "Kirsehir", region: "İç Anadolu" },
    { name: "Kocaeli", region: "Marmara" },
    { name: "Konya", region: "İç Anadolu" },
    { name: "Kutahya", region: "Ege" },
    { name: "Malatya", region: "Doğu Anadolu" },
    { name: "Manisa", region: "Ege" },
    { name: "Kahramanmaras", region: "Akdeniz" },
    { name: "Mardin", region: "Güneydoğu Anadolu" },
    { name: "Mugla", region: "Ege" },
    { name: "Muş", region: "Doğu Anadolu" },
    { name: "Nevsehir", region: "İç Anadolu" },
    { name: "Nigde", region: "İç Anadolu" },
    { name: "Ordu", region: "Karadeniz" },
    { name: "Rize", region: "Karadeniz" },
    { name: "Sakarya", region: "Marmara" },
    { name: "Samsun", region: "Karadeniz" },
    { name: "Siirt", region: "Güneydoğu Anadolu" },
    { name: "Sinop", region: "Karadeniz" },
    { name: "Sivas", region: "İç Anadolu" },
    { name: "Tekirdag", region: "Marmara" },
    { name: "Tokat", region: "Karadeniz" },
    { name: "Trabzon", region: "Karadeniz" },
    { name: "Tunceli", region: "Doğu Anadolu" },
    { name: "Sanliurfa", region: "Güneydoğu Anadolu" },
    { name: "Usak", region: "Ege" },
    { name: "Van", region: "Doğu Anadolu" },
    { name: "Yozgat", region: "İç Anadolu" },
    { name: "Zonguldak", region: "Karadeniz" },
    { name: "Aksaray", region: "İç Anadolu" },
    { name: "Bayburt", region: "Karadeniz" },
    { name: "Karaman", region: "İç Anadolu" },
    { name: "Kirikkale", region: "İç Anadolu" },
    { name: "Batman", region: "Güneydoğu Anadolu" },
    { name: "Sirnak", region: "Güneydoğu Anadolu" },
    { name: "Bartin", region: "Karadeniz" },
    { name: "Ardahan", region: "Doğu Anadolu" },
    { name: "Igdir", region: "Doğu Anadolu" },
    { name: "Yalova", region: "Marmara" },
    { name: "Karabuk", region: "Karadeniz" },
    { name: "Kilis", region: "Güneydoğu Anadolu" },
    { name: "Osmaniye", region: "Akdeniz" },
    { name: "Düzce", region: "Karadeniz" }
];

// --- Oyun Durumu ---
const gameState = {
    players: {
        user: { name: "Kullanıcı", territories: [] },
        computer: { name: "Bilgisayar", territories: [] }
    },
    neutralTerritories: [],
    allProvinceNames: [],
    currentPlayer: null, // 'user' or 'computer'
    gameOver: false,
    messageLog: [],
};

// --- Yardımcı Fonksiyonlar ---

function logMessage(message) {
    console.log(message);
    gameState.messageLog.push(message);
}

function getRandomElement(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

function coinToss() {
    return Math.random() < 0.5 ? 'yazı' : 'tura';
}

function getProvinceOwner(provinceName) {
    if (gameState.players.user.territories.includes(provinceName)) {
        return 'user';
    }
    if (gameState.players.computer.territories.includes(provinceName)) {
        return 'computer';
    }
    if (gameState.neutralTerritories.includes(provinceName)) {
        return 'neutral';
    }
    return null; // Province not found (should not happen)
}

function transferTerritory(provinceName, fromPlayerKey, toPlayerKey) {
    let sourceList;
    if (fromPlayerKey === 'user') sourceList = gameState.players.user.territories;
    else if (fromPlayerKey === 'computer') sourceList = gameState.players.computer.territories;
    else if (fromPlayerKey === 'neutral') sourceList = gameState.neutralTerritories;
    else return; // Invalid source

    const index = sourceList.indexOf(provinceName);
    if (index > -1) {
        sourceList.splice(index, 1); // Remove from source

        let targetList;
        if (toPlayerKey === 'user') targetList = gameState.players.user.territories;
        else if (toPlayerKey === 'computer') targetList = gameState.players.computer.territories;
        else if (toPlayerKey === 'neutral') targetList = gameState.neutralTerritories;
        else return; // Invalid target

        targetList.push(provinceName); // Add to target
    } else {
        console.error(`Hata: ${provinceName} ili ${fromPlayerKey} listesinde bulunamadı!`);
    }
}

function displayStatus() {
    console.log("\n--- DURUM ---");
    console.log(`Kullanıcı Toprakları (${gameState.players.user.territories.length}): ${gameState.players.user.territories.join(', ') || 'Yok'}`);
    console.log(`Bilgisayar Toprakları (${gameState.players.computer.territories.length}): ${gameState.players.computer.territories.join(', ') || 'Yok'}`);
    console.log(`Tarafsız Topraklar (${gameState.neutralTerritories.length}): ${gameState.neutralTerritories.join(', ') || 'Yok'}`);
    console.log("-------------\n");
}

function checkGameOver() {
    if (gameState.players.user.territories.length === 0) {
        logMessage("------------------------------------------");
        logMessage("OYUN BİTTİ! Tüm topraklarını kaybettin. Bilgisayar kazandı!");
        logMessage("------------------------------------------");
        gameState.gameOver = true;
    } else if (gameState.players.computer.territories.length === 0) {
        logMessage("------------------------------------------");
        logMessage("OYUN BİTTİ! Bilgisayarın toprağı kalmadı. Sen kazandın!");
        logMessage("------------------------------------------");
        gameState.gameOver = true;
    }
     else if (gameState.neutralTerritories.length === 0 && gameState.players.computer.territories.length === 0) {
         logMessage("------------------------------------------");
         logMessage("OYUN BİTTİ! Tüm topraklar senin! Kazandın!");
         logMessage("------------------------------------------");
         gameState.gameOver = true;
     }
     else if (gameState.neutralTerritories.length === 0 && gameState.players.user.territories.length === 0) {
        logMessage("------------------------------------------");
        logMessage("OYUN BİTTİ! Tüm topraklar bilgisayarın! Kaybettin!");
        logMessage("------------------------------------------");
        gameState.gameOver = true;
    }
}


// --- Oyun Mantığı ---

function initGame() {
    logMessage("Harita Oyunu Başlıyor!");
    gameState.allProvinceNames = provincesData.map(p => p.name);
    gameState.neutralTerritories = [...gameState.allProvinceNames]; // Start all as neutral

    // Assign starting territories
    const startIndex1 = Math.floor(Math.random() * gameState.neutralTerritories.length);
    const startProv1 = gameState.neutralTerritories.splice(startIndex1, 1)[0];
    gameState.players.user.territories.push(startProv1);
    logMessage(`Kullanıcı başlangıç toprağı: ${startProv1}`);

    const startIndex2 = Math.floor(Math.random() * gameState.neutralTerritories.length);
    const startProv2 = gameState.neutralTerritories.splice(startIndex2, 1)[0];
    gameState.players.computer.territories.push(startProv2);
    logMessage(`Bilgisayar başlangıç toprağı: ${startProv2}`);

    // Determine starting player
    logMessage("İlk kimin başlayacağını belirlemek için yazı tura atılıyor...");
    const tossResult = coinToss();
    logMessage(`Sonuç: ${tossResult.toUpperCase()}`);
    if (tossResult === 'yazı') { // Example: Heads starts User
        gameState.currentPlayer = 'user';
        logMessage("Kullanıcı başlıyor!");
    } else {
        gameState.currentPlayer = 'computer';
        logMessage("Bilgisayar başlıyor!");
    }
    displayStatus();
}

function processTurn(attackerKey, defenderKey, targetProvince, stakedProvince) {
    const attacker = gameState.players[attackerKey];
    const opponentKey = attackerKey === 'user' ? 'computer' : 'user';

    logMessage(`--> ${attacker.name} saldırıyor: Hedef=${targetProvince}, Hipotek=${stakedProvince}`);
    logMessage("Yazı tura atılıyor...");
    const toss = coinToss();
    logMessage(`Yazı Tura Sonucu: ${toss.toUpperCase()}`);

    // Örnek: Kazanan 'yazı' olsun (bu kuralı değiştirebilirsiniz)
    const attackerWins = toss === 'yazı';

    if (attackerWins) {
        logMessage(`*** ${attacker.name} KAZANDI! ${targetProvince} ele geçirildi! ***`);
        const targetOriginalOwnerKey = getProvinceOwner(targetProvince); // neutral or opponent
        transferTerritory(targetProvince, targetOriginalOwnerKey, attackerKey);
    } else {
        logMessage(`!!! ${attacker.name} KAYBETTİ! Hipotek edilen ${stakedProvince} elden gidiyor! !!!`);
        const targetOwnerKey = getProvinceOwner(targetProvince); // Attacker already lost, check target's current owner

        if (targetOwnerKey === 'neutral') {
            logMessage(`${stakedProvince} tarafsız bölge oldu.`);
            transferTerritory(stakedProvince, attackerKey, 'neutral');
        } else { // Target belongs to the opponent
             logMessage(`${stakedProvince} ${gameState.players[opponentKey].name}'a geçti.`);
             transferTerritory(stakedProvince, attackerKey, opponentKey);
        }
    }
    displayStatus();
    checkGameOver();
}

function userTurn() {
    logMessage("--- SENİN SIRAN ---");
    let targetProvince = null;
    let stakedProvince = null;
    const possibleTargets = [...gameState.neutralTerritories, ...gameState.players.computer.territories];
    const possibleStakes = [...gameState.players.user.territories];

    if (possibleTargets.length === 0) {
        logMessage("Saldırılacak toprak kalmadı!");
        // Oyunu bitirebilir veya başka bir aksiyon ekleyebilirsiniz. Şimdilik sırayı geçiriyoruz.
        return;
    }

     if (possibleStakes.length === 0) {
        logMessage("Hipotek edecek toprağın kalmadı!");
         // Bu durum zaten checkGameOver tarafından yakalanmalı ama garanti olsun.
         gameState.gameOver = true;
        return;
     }


    // Get target province
    while (targetProvince === null) 
    {
        console.log("Saldırılabilecek İller: ", possibleTargets.join(', '));
        const inputTarget = prompt(`Saldırmak istediğin ili seç (Yukarıdaki listeden): `);
        if (possibleTargets.includes(inputTarget)) {
            targetProvince = inputTarget;
        } else {
            console.log("Geçersiz seçim veya sana ait bir il. Lütfen listeden seç.");
        }
    }

    // Get province to stake (hypothecate)
    while(stakedProvince === null) 
    {
        console.log("Hipotek Edebileceğin İller: ", possibleStakes.join(', '));
        const inputStake = prompt(`Kaybedersen feda edeceğin ili seç (Yukarıdaki listeden): `);
         if (possibleStakes.includes(inputStake)) {
             stakedProvince = inputStake;
         } else {
             console.log("Geçersiz seçim. Lütfen sahip olduğun illerden birini seç.");
         }
     }


    processTurn('user', getProvinceOwner(targetProvince), targetProvince, stakedProvince);
}

function computerTurn() {
    logMessage("--- BİLGİSAYARIN SIRASI ---");
    const possibleTargets = [...gameState.neutralTerritories, ...gameState.players.user.territories];
    const possibleStakes = [...gameState.players.computer.territories];

    if (possibleTargets.length === 0) {
        logMessage("Bilgisayarın saldıracak toprağı kalmadı!");
        // Oyunu bitirebilir veya başka bir aksiyon ekleyebilirsiniz. Şimdilik sırayı geçiriyoruz.
        return;
    }

    if (possibleStakes.length === 0) {
        logMessage("Bilgisayarın hipotek edecek toprağı kalmadı!");
         // Bu durum zaten checkGameOver tarafından yakalanmalı ama garanti olsun.
         gameState.gameOver = true;
        return;
     }

    // Simple AI: Choose random target and random stake
    const targetProvince = getRandomElement(possibleTargets);
    const stakedProvince = getRandomElement(possibleStakes);

    if (!targetProvince || !stakedProvince) {
        console.error("Bilgisayar hedef veya hipotek seçeMEdi!"); // Should not happen if lists are not empty
        return;
    }

    processTurn('computer', getProvinceOwner(targetProvince), targetProvince, stakedProvince);
}

function switchPlayer() {
    gameState.currentPlayer = gameState.currentPlayer === 'user' ? 'computer' : 'user';
}

// --- Oyun Döngüsü ---
function gameLoop() {
    initGame();

    //while (!gameState.gameOver) 
    {
        if (gameState.currentPlayer === 'user') {
            userTurn();
        } else {
            computerTurn();
        }

        if (!gameState.gameOver) {
            switchPlayer();
            // İsteğe bağlı: Her tur arasında bekleme ekleyebilirsiniz
            // prompt("Devam etmek için Enter'a basın...");
        }
    }

    logMessage("\nOyun Bitti. Oynadığınız için teşekkürler!");
    // İsteğe bağlı: Oyun sonu özetini gösterebilirsiniz
    // displayStatus();
}

// Oyunu Başlat
gameLoop();