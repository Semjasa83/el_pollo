class CoinBar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_moneda/Verde/000.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Verde/020.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Verde/040.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Verde/060.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Verde/080.png',
        'img/7.Marcadores/Barra/Marcador_moneda/Verde/100.png'
    ]

    percentage = 0;
    coin_sound = new Audio('audio/coin.mp3');

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 290;
        this.y = 0;
        this.width = 140;
        this.height = 40;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    collectCoin() {
        this.percentage += 10;
        this.coin_sound.play();
    }

    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage > 70) {
            return 4;
        } else if (this.percentage > 50) {
            return 3;
        } else if (this.percentage > 30) {
            return 2;
        } else if (this.percentage > 10) {
            return 1;
        } else {
            return 0;
        }
    }
}