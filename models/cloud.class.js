class Cloud extends MovableObject {

/**
* override from speed at movable-objects.class.js
* 
* @param {speed} - sets speed for Clouds
*/
    y = 0;
    height = 300;
    width = 1000;
    speed = 0.1 + Math.random() * 0.6;


    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/completo.png');
        this.x = 200 + Math.random() * 3000; //Spawn for Clouds
        this.y = 10 + Math.random() * 90;
        this.animate();
    }

    animate() {
        setInterval( () => {
            //console.log(this.speed,this.x);
        if (this.x > -1000) {
            this.x -= this.speed;
        } else {
            this.x = 3900;
            this.x -= this.speed;
        }
        }, 1000 / 60);
    }
}
