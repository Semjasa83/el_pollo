class Endboss extends MovableObject {
    y = 140;
    width = 250;
    height = 300;
    energy = 100;


    IMAGES_WALK = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G4.png'
    ]

    IMAGES_ALERT = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png',
    ];

    IMAGES_ATK = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G20.png'
    ];

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png'
    ];

    boss_Alert = false;

    constructor() {
        super().loadImage(this.IMAGES_ALERT[7]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALK);
        this.x = 3300;
        this.animate();
    }

    //todo

    /**
     * Animation for Chicken in Alert
     */
    /*
        animate() {
            setInterval(() => {
                if (this.boss_Alert == true) {
                    console.log(this.boss_Alert);
                    this.playAnimation(this.IMAGES_WALK);
                    setInterval(()=>{
                    this.x -= this.speed;
                    }, 200);
                }
                if (this.boss_Alert == false) {
                    this.playAnimation(this.IMAGES_ATK);            
                }
                /*
                if (this.bossIsHurt()){
                    this.playAnimation(this.IMAGES_HURT);
                } 
                if (this.bossIsDead()){
                    this.playAnimation(this.IMAGES_DEAD);
                }
            }, 250);
        }*/

    animate() {
        setInterval(() => {
            if (this.bossIsDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.bossIsHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else {
                if (this.boss_Alert == true) {
                    console.log(this.boss_Alert);
                    this.playAnimation(this.IMAGES_WALK);
                    setInterval(() => {
                        this.x -= this.speed;
                    }, 200);
                }
                if (this.boss_Alert == false) {
                    this.playAnimation(this.IMAGES_ATK);
                }
            }
        }, 250);
    }
}

