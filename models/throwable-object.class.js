class ThrowableObject extends MovableObject{
    throw_sound = new Audio('audio/throw.mp3');
    bottle_sound = new Audio('audio/bottle.mp3');
    
    IMAGES_ROTATEBOTTLE = [
     'img/6.botella/Rotaciขn/Mesa_de_trabajo_1_copia_3.png',
     'img/6.botella/Rotaciขn/Mesa_de_trabajo_1_copia_4.png',
     'img/6.botella/Rotaciขn/Mesa_de_trabajo_1_copia_5.png',
     'img/6.botella/Rotaciขn/Mesa_de_trabajo_1_copia_6.png'
    ];
    
    
    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_ROTATEBOTTLE);
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
        this.animate();
        this.throw();
        this.throw_sound.play();
        this.bottle_sound.play();
    }
    
    /**
     * Range and Speed from Bottles
     */
    throw(){
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 45;
        }, 55);
    }
    
    /**
     * Bottle rotation Animation
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ROTATEBOTTLE);
        }, 120);
    }
    }