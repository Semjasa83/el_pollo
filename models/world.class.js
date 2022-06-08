class World {

    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;

    loopBackgroundsToMap() {
        for (let j = 0; j < 3; j++) {

            for (let i = 0; i < this.backgroundObjects.length; i++) {
                const copy = Object.assign({}, this.backgroundObjects[i]);
                // TODO kopiertes Object einbauen!!!
                this.copy.x += 719 * j;
                this.addToMap(this.copy);
            }}
        }
    /*    
        this.backgroundObjects.forEach( mo => {
            mo.x += 719 * j;
            this.addToMap(mo);
        });
        */

    //.... -> =0
    canvas;
    ctx;
    keyboard;
    camera_x = 0; //verschieben der Spielwelt

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld(); //um keyboad zu übergeben
    }

    setWorld() {
        this.character.world = this; //nur this um die Instanz zu übergeben
    }

    /**
     *  correct Order for Z-Index on Canvas
     *  first Line, first Layer ....
     */

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); //Ausschnitt verschieben

        this.addObjectsToMap(this.backgroundObjects);
        //this.loopBackgroundsToMap();
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); //am ende Auschnitt gegen korrigieren, sonst wäre Bild schwarz

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }
    //mo = movable-object
    addToMap(mo) {
        if (mo.otherDirection) { //wird das object in eine andere Richtung bewegt?
            this.ctx.save(); //Bilder speichern
            this.ctx.translate(mo.width, 0);//den Sprung im Canvas korrigieren um die Breite des Character
            this.ctx.scale(-1, 1);//bilder drehen
            mo.x = mo.x * -1; //umdrehen der x coordinate
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) { //wenn ctx verändert wurde, wird hier rückgängig gemacht
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}