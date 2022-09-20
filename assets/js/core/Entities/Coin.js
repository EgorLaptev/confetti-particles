import Entity from "./Entity.js";
import Generator from "../Tools/Generator.js";

export default class Coin extends Entity {

    width  = 10
    height = 10

    static list = []

    constructor(x, y) {
        super(x, y)
        Coin.list.push(this);
    }

    render(ctx) {
        super.render(ctx)
    }

    destroy() {
        Entity.list.splice(Entity.list.indexOf(this), 1);
        Coin.list.splice(Coin.list.indexOf(this), 1);
        Coin.generate(1)
    }

    static generate(count=1) {

        for(let i=0;i<count;i++)
            new Coin(
                Generator.random(0, window.innerWidth-10),
                Generator.random(0, window.innerHeight-10)
            )

    }

}