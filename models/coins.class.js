class Coins extends MovableObject {
    width = 120;
    height = 120;

    offset = {
        top: 30,
        left: 30,
        right: 60,
        bottom: 60
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