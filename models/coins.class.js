class Coins extends MovableObject {
    width = 150;
    height = 150;

    constructor(image, x, y){
        super();
        this.loadImage(image);
        this.x = x;
        this.y = y;
    }
}