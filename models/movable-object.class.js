 class MovableObject {
    x = 120;
    y = 245;
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

    moveRight() {
        console.log('Moving right');

    }

    moveLeft () {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


}