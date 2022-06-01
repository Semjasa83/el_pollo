class MovableObject { //an sich eine Schablone mit den Feldern definiert
    x = 120; //definierter Startpunkt x und y
    y = 200;
    img;
    height = 200;
    width = 100;
    imageCache = {};

    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image)  <img id="image" src>
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
            this.imageCache[path] = path;

        });
    }

    moveRight() {   //function moveRight() -> moveRight(), muss so gekürzt werden, wenn es innerhalb einer Class ist.
        console.log('Moving right');

    }

    moveLeft() {

    }
}