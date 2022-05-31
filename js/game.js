let canvas;
let ctx;
let character = new MovableObject(); //ist ein JSON das die ganzen Attribute schon besitzt durch die andere JS datei.

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); //damit context über CTX im schnellzugriff ist // ctx ist standard dafür

    console.log('My Character is', character);

    /*
    character.src = '../img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png'; //character wird ein bild zugeordnet
    ctx.drawImage(character, 20,20,50,150); //x,y koordinate, breite, höhe
    */
}