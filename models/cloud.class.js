class Cloud extends MovableObject {
    y = 30;
    height = 300;
    width = 1000;
    CLOUD_IMAGE = [];
    //speed => movable-objects.class.js
    
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/completo.png');
        this.loadImages(this.CLOUD_IMAGE);
        this.x = 250 + Math.random() * 3000; // die meisten Spawnen fast auf der selben Stelle
        this.y = Math.random() * 90;
        this.animate();
    }

    animate() {
        this.moveLeft();

        /**
         * habe bei movable_objects wieder die Sachen entfernt, siehe GIT vorheriger und jetziger COMMIT
         */
        setInterval( () => { 
            let i = this.CLOUD_IMAGE.length; 
            let pathC = this.CLOUD_IMAGE[i];
            this.img = this.cloudCache[pathC];
            this.currentCloud++;
        }, 250);
    }


}

