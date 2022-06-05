class Cloud extends MovableObject {
    y = 50;
    height = 300;
    width = 600;
 /**
  * speed -> movable-object
  */

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500; // muss ich verringern

        this.animate();
    }

/**
 * 0.2px at 60 fps
 */

    animate() {
        this.moveLeft();
    }


}

