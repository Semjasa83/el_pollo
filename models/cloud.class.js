class Cloud extends MovableObject {
    y = 30;
    height = 300;
    width = 1000;
    CLOUD_IMAGE = [];
    //speed => movable-objects.class.js
    
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/completo.png');
        this.loadImages(this.CLOUD_IMAGE);
        this.x = 250 + Math.random() * 3000; // muss ich verringern
        this.y = Math.random() * 90;
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval( () => {
            let i = this.CLOUD_IMAGE.length; 
            let clouds = this.CLOUD_IMAGE[i];
            this.img = this.cloudCache[pathC];
            this.currentCloud++;
        }, 250);
    }


}

