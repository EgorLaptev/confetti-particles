import Entity from "./Entity.js";

export default class Enemy extends Entity {

    static list = []

    damage = 1

    constructor(x, y) {
        super(x, y);
        this.velocity.max = 10;
        Enemy.list.push(this);
    }

    render(ctx) {
        super.render(ctx)
        /* health */
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x, this.y-20, 100, 5);
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y-20, this.health, 5);
    }

}