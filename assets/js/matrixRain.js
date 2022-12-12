const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

// const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

// const alphabet = katakana + latin + nums;
const alphabet = latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

const rows = canvas.height / fontSize

for (let x = 0; x < columns; x++) {
    rainDrops[x] = rows;
}
var grd = context.createLinearGradient(window.innerWidth / 2, 0 , window.innerWidth / 2, window.innerHeight);
grd.addColorStop(0,"#39306211");
grd.addColorStop(1,"#0F0C1111");

const draw = () => {
    // context.fillStyle = '#0F0C1111';
    context.fillStyle = grd;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] <= rows / 5 && Math.random() > 0.975) {
            rainDrops[i] = rows;
        }
        rainDrops[i]--;
    }
};

setInterval(draw, 30);