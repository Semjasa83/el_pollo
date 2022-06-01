class World {

    //ist ein JSON das die ganzen Attribute schon besitzt durch die andere JS datei.
    //variablen in einer class werden ohne "let" definiert.
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png'),
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

        this.addToMap(this.character);
        
        this.enemies.forEach(enemy => {
            this.addToMap(enemy);
        });

        this.clouds.forEach(cloud => {
            this.addToMap(cloud);
        });

        this.backgroundObjects.forEach(bgro => {
            this.addToMap(bgro);
        });

        let self = this; //draw() wird immer wieder aufgerufen
        requestAnimationFrame(function() { //wird so oft aufgerufen, wie die Grafikkarte hergibt. //ausgeführt, sobald alles geladen ist.
            self.draw(); //his geht hier nicht mehr, daher self = this;
    });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}