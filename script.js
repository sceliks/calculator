const screen = document.getElementById("screen");

function add(value){
screen.value += değer;
}

function calculate(){
try{
screen.value = eval(screen.value);
}yakalan{
screen.value = "Hata";
}
}

function clearScreen(){
screen.value = "";
}

// TAM EKRAN (dokununca adres çubuğu kaybolur)
document.body.addEventListener("click", () => {
if (document.documentElement.requestFullscreen) {
document.documentElement.requestFullscreen();
}
}, { once: true });


Service Worker kayıt
if (navigator'da 'serviceWorker') {
navigator.serviceWorker.register('sw.js');
}
