class StatusBar extends DrawableObject{

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_vida/Naranja/000.png',
        'img/7.Marcadores/Barra/Marcador_vida/Naranja/020.png',
        'img/7.Marcadores/Barra/Marcador_vida/Naranja/040.png',
        'img/7.Marcadores/Barra/Marcador_vida/Naranja/060.png',
        'img/7.Marcadores/Barra/Marcador_vida/Naranja/080.png',
        'img/7.Marcadores/Barra/Marcador_vida/Naranja/100.png'
    ]

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 10;
        this.y = 0;
        this.width = 140;
        this.height = 40;
    }

    //setPercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => o .... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }

    }

}