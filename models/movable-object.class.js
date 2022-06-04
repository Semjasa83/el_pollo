/**
 * x and y are Startpoints.
 */

class MovableObject {
    x = 120;
    y = 200;
    img;
    height = 200;
    width = 100;
    imageCache = {};
    currentImage = 0;

    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ....]
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

    moveLeft() {

    }
}