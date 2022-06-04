class Cloud extends MovableObject {
    y = 50;
    height = 300;
    width = 600;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500; // muss ich verringern

        this.animate();
    }

/**
 * 0.2sec at 60 fps
 */

    animate() {
        setInterval( () => {
        this.x -= 0.2;
    }, 1000 / 60);
    }
}
