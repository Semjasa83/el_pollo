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

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 5 % 6;   --> % Mathematischer Rest -> 0, Rest 5  // i = 0, 1, 2, 3, 4, 5, 0, 1 usw.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('Moving right');

    }

    moveLeft () {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


}