class Coins extends MovableObject {
    width = 90;
    height = 90;

    offset = {
        top: 20,
        left: 20,
        right: 40,
        bottom: 40
    };


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