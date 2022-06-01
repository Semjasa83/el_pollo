class MovableObject { //an sich eine Schablone mit den Feldern definiert
    x = 120; //definierter Startpunkt x und y
    y = 400;
    img;

    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image)  <img id="image" src>
        this.img.src = path;
    }

    moveRight() {   //function moveRight() -> moveRight(), muss so gekürzt werden, wenn es innerhalb einer Class ist.
        console.log('Moving right');
        
    }

    moveLeft(){

    }
}