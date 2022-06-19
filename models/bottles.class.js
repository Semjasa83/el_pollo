class Bottles extends MovableObject {

    width = 80;
    height = 80;

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