class Cloud extends MovableObject {
    y = 20;
    height = 300;
    width = 1000;
    speed = 0.2 + Math.random() * 1;
    //speed => movable-objects.class.js

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/completo.png');
        this.x = 250 + Math.random() * 3000; // die meisten Spawnen fast auf der selben Stelle
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
