import Entity from "./Entity.js";

export default class Player extends Entity {

    static list = []

    constructor(x, y) {
        super(x, y);
        Player.list.push(this);
    }

}