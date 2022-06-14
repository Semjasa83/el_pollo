 class MovableObject {
    x = 120;
    y = 190;
    img;
    height = 200;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    /**
     * sets Gravitation Speed if a class is above the Ground
     */

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -=this.acceleration;
        }
        },1000 / 25);
    }

    isAboveGround() {
        return this.y < 190;
    }

    /**
     * Abbreviation for the path specification of the images
     * 
     * @param {*} path - example loadImage('img/test.png')
     */

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * integrates the images including the path into the global variable "img"
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ....]
     * arr = [character] -> imagesWalking
     */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });
    }

    /**
     * Animation for Walking -> Chicken, Boss, Charakter, Clouds etc.
     * 
     * @param {variable} images - is IMAGES__WALKING from other Classes 
     */

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 5 % 6;   --> % Mathematischer Rest -> 0, Rest 5  // i = 0, 1, 2, 3, 4, 5, 0, 1 usw.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft () {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 35; //for Jump Height
    }
/*
    drawImageObject(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(mo) {
        if(mo instanceof Character || mo instanceof Chicken){
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }
*/
}