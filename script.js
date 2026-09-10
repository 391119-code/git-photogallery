const palettes = [
    ["#0f766e", "#5eead4"],
    ["#1d4ed8", "#93c5fd"],
    ["#7e22ce", "#d8b4fe"],
    ["#be123c", "#fda4af"],
    ["#c2410c", "#fdba74"],
    ["#a16207", "#fde047"],
    ["#15803d", "#86efac"],
    ["#0369a1", "#7dd3fc"],
    ["#4338ca", "#a5b4fc"]
];

document.querySelectorAll("[data-image-number]").forEach((image, index) => {
    if (image.src && image.src !== window.location.href) return;
    const [start, end] = palettes[index];
    const number = image.dataset.imageNumber;
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
            <defs>
                <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
                    <stop stop-color="${start}"/>
                    <stop offset="1" stop-color="${end}"/>
                </linearGradient>
            </defs>
            <rect width="800" height="400" fill="url(#background)"/>
            <circle cx="${180 + index * 35}" cy="${115 + index * 12}" r="115" fill="white" opacity=".18"/>
            <circle cx="${625 - index * 22}" cy="${310 - index * 10}" r="155" fill="white" opacity=".12"/>
            <text x="400" y="230" text-anchor="middle" fill="white" font-family="Arial, sans-serif"
                  font-size="96" font-weight="700">${number}</text>
        </svg>`;

    image.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
});