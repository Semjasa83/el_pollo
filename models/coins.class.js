class Coins extends MovableObject {
    width = 150;
    height = 150;

    /**
     * Preferences for Coins
     * @param {*} image 
     * @param {*} x 
     * @param {*} y 
     */
    constructor(image, x, y){
        super();
        this.loadImage(image);
        this.x = x;
        this.y = y;
    }
}