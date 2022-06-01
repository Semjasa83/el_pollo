class Cloud extends MovableObject {
    y = 50;
    height = 300;
    width = 600;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500; // Zahl zwischen 200-400; random hat zahlen zwischen 0 - 1.0

    }
}