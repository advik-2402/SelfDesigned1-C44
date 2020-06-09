class Player {
    constructor() {
        this.body = createSprite(100, 300, 20, 20);
        this.body.addImage("User",userImg);
        this.body.addImage("Bomb",bombImg);
        this.body.addImage("Tank",tankImg);
    }

    display() {
        drawSprites();
    }
}