class MovableObject extends DrawableObject {

    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lasthit = 0;

    /**
     * sets Gravitation Speed if a class is above the Ground
     */

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 190;
    }

    /**
     * Animation for Walking -> Chicken, Boss, Charakter, Clouds etc.
     * 
     * @param {variable} images - is IMAGES__WALKING from other Classes 
     */

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 5 % 6;   --> % Mathematischer Rest -> 0, Rest 5  // i = 0, 1, 2, 3, 4, 5, 0, 1 usw.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 35; //for Jump Height
    }

    // character.isColliging(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5; //dmg ratio for hit
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //differnece in s
        return timepassed < 1; //returns TRUE
    }

    isDead() {
        return this.energy == 0;
    }

}