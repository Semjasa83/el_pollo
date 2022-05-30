let canvas;
let ctx;
let character = new Image();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); //damit context über CTX im schnellzugriff ist // ctx ist standard dafür


    character.src = '../img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png'; //character wird ein bild zugeordnet

    ctx.drawImage(character, 20,20,50,150); //x,y koordinate, breite, höhe
}