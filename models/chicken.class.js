
class Chicken extends MovableObject {
    y = 373;
    height = 50;
    width = 50;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    chicken_kill_sound = new Audio('audio/chicken.mp3');

    /**
    * override from speed at movable-objects.class.js
    * 
    * @param {speed} - sets speed for Chicken, with random Speed
    */
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 450 + Math.random() * 3000; //sets Spawn for Chickens
        this.speed = 0.3 + Math.random() * 0.35; //sets Speed for Chickens

        this.animate();
    }

    animate() {
        setInterval( () => { // for moving left the Chickens
            this.x -= this.speed;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 250);

        setInterval(() => {
            if (this.x > -100) {
                this.x -= this.speed;
            } else {
                this.x = 2600;
                this.x -= this.speed;
            }
        }, 1000 / 60);
    }
}