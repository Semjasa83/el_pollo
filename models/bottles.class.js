class Bottles extends MovableObject {

    width = 80;
    height = 80;

    offset = {
        top: 10,
        left: 20,
        right: 40,
        bottom: 20
    };

    /**
     * Preferences for Bottles
     * @param {*} image 
     * @param {*} x 
     * @param {*} y 
     */
    constructor(image, x, y) {
        super();
        this.loadImage(image);
        this.x = x;
        this.y = y;
    }
}