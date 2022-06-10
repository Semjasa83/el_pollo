class Cloud extends MovableObject {

/**
* override from speed at movable-objects.class.js
* 
* @param {speed} - sets speed for Clouds
*/
    y = 20;
    height = 300;
    width = 1000;
    speed = 0.1 + Math.random() * 1;


    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/completo.png');
        this.x = 250 + Math.random() * 3000; //Spawn for Clouds
        this.y = Math.random() * 90;
        this.animate();
    }

    animate() {
        if (this.x > -100) {
            this.moveLeft();

        } else {
            this.x = 3000;
            this.moveLeft();
        }
    }
}
