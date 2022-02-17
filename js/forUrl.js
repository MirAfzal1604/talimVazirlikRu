let emojis = [
    "😂",
    "😅",
    "😢",
    "😌",
    "🤯",
    "🤨",
    "🤔",
    "🧐",
    "😊",
    "😊",
    "🥳",
    "🤩",
    "😎",
    "😎",
    "😎",
    "😎",
    "🤮",
    "🥴",
];

let urlAnimation = () => {
    window.location.hash =
        emojis[Math.floor((Date.now() / 100) % emojis.length)];
    setTimeout(urlAnimation, 300);
}

urlAnimation();