import Generator from "../Tools/Generator.js";
import Collision from "../Tools/Collision.js";

export default class Entity {

    static list = []

    health = 100

    color = Generator.randomColor()

    braking = .93

    x = 0
    y = 0

    velocity = { x: 0, y: 0, max: 30 }

    speed = .5;

    width = 100
    height = 100

    floor = cnv.height - this.height

    jumped = true

    constructor(x, y) {
        this.x = x
        this.y = y
        Entity.list.push(this)
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    move() {

        this.velocity.y *= this.braking;
        this.velocity.x *= this.braking;

        const floor = cnv.height - this.height;

        /* borders */
        if (
            this.x + this.velocity.x >= window.innerWidth-this.width ||
            this.x + this.velocity.x <= 0
        ) this.velocity.x = -this.velocity.x
        
        if (
            this.y + this.velocity.y >= window.innerHeight-this.height ||
            this.y + this.velocity.y <= 0
        ) this.velocity.y = -this.velocity.y


        this.x += this.velocity.x
        this.y += this.velocity.y

        /* Floor */
        // if (this.y + this.velocity.y <= floor) {
        //     this.y += this.velocity.y
        // }  else {
        //     this.y = floor
        //     this.jumped = false;
        // }

        /* top */
        // if (this.y + this.velocity.y < 0) this.y = 0

        // Entity.list.forEach(entity => {
        //     if (entity !== this && Collision.check(entity, this)) {
        //         // this.y = entity.y - this.height-1;
        //         this.velocity.x = -this.velocity.x
        //         this.velocity.y = -this.velocity.y
        //     }
        // })

    }

    jump() {
        if (this.jumped) return false
        this.velocity.y = -this.velocity.max
        this.jumped = true
    }

    damage(count) {
        if (this.health - count <= 0) {
            this.health = 0
        } else this.health -= count
    }

}