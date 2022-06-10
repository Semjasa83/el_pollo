
class Character extends MovableObject {
    x = 50;
    height = 190;
    speed = 7;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ]
    /**
     * @param {*} world - to be able to access the variables of the world including the keyboard
     */
    world; 
    walking_sound = new Audio('audio/running.mp3')

    constructor() { 
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x ) { //&&limits the Level on Right Side - End from Level
               this.x += this.speed;
               this.otherDirection = false;
               this.walking_sound.play();
            }
            if(this.world.keyboard.LEFT && this.x > 0) { //&& blocks the x direction at 0 for the player
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
             }
             this.world.camera_x = - this.x +50; //positions the character 50px away from the border
        }, 1000/60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 5 % 6;   --> % Mathematischer Rest -> 0, Rest 5
                // i = 0, 1, 2, 3, 4, 5, 0, 1 usw.
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
    }

    jump() {

    }
}