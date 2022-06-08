class Chicken extends MovableObject{
    y = 380;
    height = 50;
    width = 50;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    chicken_kill_sound = new Audio('audio/chicken.mp3');

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');  
        this.loadImages(this.IMAGES_WALKING);
        this.x = 250 + Math.random() * 500; 
        this.speed = 0.25 + Math.random() * 0.35; //-> moveLeft -> movable object
                
        this.animate();
    }

    animate() {
        this.moveLeft(); // -> movable-object -> speed

        setInterval( () => {
        let i = this.currentImage % this.IMAGES_WALKING.length; 
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 250);
    }

}