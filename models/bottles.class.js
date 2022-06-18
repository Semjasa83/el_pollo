class Bottles extends MovableObject {

    width = 100;
    height = 100;

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