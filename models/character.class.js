class Character extends MovableObject {
    x = 50;
    height = 230;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ]
    constructor() { //ist bei jeder Klasse als erstes ausgeführt, wenn sie neu erstellt wird.
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png'); //super = lädt von der übergeordneten Class die loadImage
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {

        setInterval( () => {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 5 % 6;   --> % Mathematischer Rest -> 0, Rest 5
        // i = 0, 1, 2, 3, 4, 5, 0, 1 usw.
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 150);
    }

    jump(){

    }
}