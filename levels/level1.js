/**
 * the more objects are entered, the more will be rendered in the game.
 * 
 * @param {Array} array - sets the Enemies for Level 1
 */

const level1 = new Level(
    [
        new Endboss(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken()
    ],
    [
        new Cloud(),
        new Cloud(),
        new Cloud(),
    ],
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', -719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', -719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', -719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),
    ],
    [
        new Bottles('img/6.botella/1.Marcador.png', 340, 220),
        new Bottles('img/6.botella/1.Marcador.png', 450, 130),
        new Bottles('img/6.botella/1.Marcador.png', 600, 130),
        new Bottles('img/6.botella/1.Marcador.png', 710, 220),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 950, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 1100, 340),
        new Bottles('img/6.botella/1.Marcador.png', 1340, 220),
        new Bottles('img/6.botella/1.Marcador.png', 1450, 130),
        new Bottles('img/6.botella/1.Marcador.png', 1600, 130),
        new Bottles('img/6.botella/1.Marcador.png', 1710, 220),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 1950, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 2100, 340),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 2350, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 2500, 340),
    ],
    [
        new Coins('img/8.Coin/Moneda1.png', 500, 110),
        new Coins('img/8.Coin/Moneda1.png', 500, 340),
        new Coins('img/8.Coin/Moneda1.png', 1500, 110),
        new Coins('img/8.Coin/Moneda1.png', 1500, 340),
        new Coins('img/8.Coin/Moneda1.png', 999, 320),
        new Coins('img/8.Coin/Moneda1.png', 1999, 320),
        new Coins('img/8.Coin/Moneda1.png', 2399, 320),
    ],
);