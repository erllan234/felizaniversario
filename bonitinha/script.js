let slide = document.getElementById("slide");
let imagens =["imagem1.jpeg","imagem2.jpeg","imagem3.jpeg","imagem4.jpeg","imagem5.jpeg","imagem6.jpeg","imagem7.jpeg","imagem8.jpeg","imagem9.jpeg","imagem10.jpeg"]
let i=0
let time =4500

function slideshow(){
    slide.src = imagens[i];
    i < imagens.length - 1 ? i++ : i=0;
    setTimeout(slideshow, time);  
}
slideshow();

const audio = document.getElementById("audio");
const playBtn = document.querySelector(".play-btn");
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

let isPlaying = false;

// Configuração do áudio
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
const source = audioCtx.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioCtx.destination);
analyser.fftSize = 64;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function drawWaveform() {
    requestAnimationFrame(drawWaveform);

    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1DB954";
    
    const barWidth = (canvas.width / bufferLength) * 2;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 2;
    }
}

playBtn.addEventListener("click", function () {
    if (!isPlaying) {
        audioCtx.resume();
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        drawWaveform();
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
    isPlaying = !isPlaying;

    const textos=document.querySelectorAll(".texto1")
    
});

audio.addEventListener("ended", function () {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
});