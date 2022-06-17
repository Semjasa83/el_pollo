class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 3500;
    bottles;
    coins;

    /**
     * transfers all values ​​of the levels to the variable
     * 
     * @param {*} enemies - enemies from Level1 ... Level2 etc 
     * @param {*} clouds - clouds from Level1 ... Level2 etc 
     * @param {*} backgroundObjects - background objects from Level1 ... Level2 etc 
     * @param {*} bottles - collectable Bottles
     * @param {*} coins - collectable coins
     */
    constructor(enemies, clouds, backgroundObjects, bottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }
}