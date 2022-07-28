class Character extends MovableObject {

    /**
    * 
    * @param {var} world - to be able to access the variables of the world including the keyboard
    */
    world;
    x = 50;
    height = 240;
    width = 120;
    speed = 7;

    boss_Stage = false;
    stopCharacter;

    offset = {
        top: 90,
        left: 20,
        right: 30,
        bottom: 100
    };


    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-43.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-57.png'
    ];

    IMAGES_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-10.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-20.png'
    ]

    /**
     * Soundfiles for Character
     */
    walking_sound = new Audio('audio/running.mp3');
    jumping_sound = new Audio('audio/jump.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    died_sound = new Audio('audio/died.mp3');

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    /**
     * Character Animation for Move Left & Right & Jump etc.
     */
    animate() {
        /**
         * Character SoundBoard and Moveanimation for Left and Right
         */
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { //&&limits the Level on Right Side - End from Level
                this.moveRight();
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0 && this.x < 3880) { //&& blocks the x direction at 0 for the player
                this.moveLeft();
                this.walking_sound.play();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jumping_sound.play();
            }
            if (this.x > 3900 && this.world.keyboard.RIGHT){
                this.boss_Stage = true;
                this.otherDirection = false;
            }
            if(this.x > 3900 && this.world.keyboard.LEFT) {
                this.boss_Stage = true;
                this.otherDirection = true;
                this.moveLeft();
            }
            if(this.x > 4400) {
                this.world.level.enemies[0].boss_Alert = true;
                console.log('char', this.world.level.enemies[0].boss_Alert);
            }
            this.world.camera_x = - this.x + 50; //positions the character 50px away from Start Border
        }, 1000 / 60);

        /**
         * Character Moveanimation for Jump & Move Left and Right
         */

        this.stopCharacter = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.died_sound.play();
                clearInterval(this.stopCharacter);   
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.hurt_sound.play();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            } 
            
        }, 120);
    }
}