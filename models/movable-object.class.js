/**
 * x and y are Startpoints.
 */

class MovableObject {
    x = 120;
    y = 245;
    img;
    imgCloud;
    height = 200;
    width = 100;
    imageCache = {};
    currentImage = 0;
    cloudCache = {};
    currentCloud = 0;
    speed = 0.2;
    otherDirection = false;

    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
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
        arr.forEach((pathC) => {
            let imgCloud = new Image();
            imgCloud.src = pathC;
            this.cloudCache[pathC] = imgCloud;

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