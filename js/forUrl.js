let emojis = [
    "๐",
    "๐",
    "๐ข",
    "๐",
    "๐คฏ",
    "๐คจ",
    "๐ค",
    "๐ง",
    "๐",
    "๐",
    "๐ฅณ",
    "๐คฉ",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐คฎ",
    "๐ฅด",
];

let urlAnimation = () => {
    window.location.hash =
        emojis[Math.floor((Date.now() / 100) % emojis.length)];
    setTimeout(urlAnimation, 300);
}

urlAnimation();