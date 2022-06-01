class World {

    //ist ein JSON das die ganzen Attribute schon besitzt durch die andere JS datei.
    //variablen in einer class werden ohne "let" definiert.
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    canvas;
    ctx;


    constructor(canvas)  {
        this.ctx = canvas.getContext('2d'); //damit context über CTX im schnellzugriff ist // ctx ist standard dafür
        this.canvas = canvas; //this.canvas(die Globale) wird canvas = die aus dem constructor übergeben.
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        let self = this; //draw() wird immer wieder aufgerufen
        requestAnimationFrame(function() { //wird so oft aufgerufen, wie die Grafikkarte hergibt. //ausgeführt, sobald alles geladen ist.
            self.draw(); //his geht hier nicht mehr, daher self = this;
    });
    }
}