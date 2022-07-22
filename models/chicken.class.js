
class Chicken extends MovableObject {
    y = 373;
    height = 50;
    width = 50;
    energy = 1;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita_(estas_salen_por_orden_de_la_gallina_gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita_(estas_salen_por_orden_de_la_gallina_gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita_(estas_salen_por_orden_de_la_gallina_gigantona)/3.Ga_paso_izquierdo.png'
        /*'img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita_(estas_salen_por_orden_de_la_gallina_gigantona)/4.G_muerte.png'*/
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita_(estas_salen_por_orden_de_la_gallina_gigantona)/4.G_muerte.png'
    ];

    /**
    * override from speed at movable-objects.class.js
    * 
    * @param {speed} - sets speed for Chicken, with random Speed
    */
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_b_sico/Versi¢n_Gallinita_(estas_salen_por_orden_de_la_gallina_gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1000 + Math.random() * 3800; //sets Spawn for Chickens
        this.speed = 0.3 + Math.random() * 0.35; //sets Speed for Chickens
        this.animate();
    }

    animate() {
        this.chickenMove();
        this.chickenAnimation();
        this.chickenSpawn();
    }

    chickenMove() {
        setInterval( () => { // for moving left the Chickens
            if (this.energy <= 0) {
                this.speed = 0;
            } else {
            this.x -= this.speed;
            }
        }, 1000 / 60);
    }

    chickenAnimation() {
        setInterval(() => {
            if(this.energy <= 0) {
            this.playAnimation(this.IMAGES_DEAD);
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
        }, 250);
    }

    chickenSpawn() {
        setInterval(() => {
            if (this.x > -100) {
                this.x -= this.speed;
            } else {
                this.x = 3800;
                this.x -= this.speed;
            }
        }, 1000 / 60);
    }


}