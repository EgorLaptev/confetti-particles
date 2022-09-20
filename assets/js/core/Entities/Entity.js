import Generator from "../Tools/Generator.js";

export default class Entity {

    static list = []

    color = Generator.randomColor()

    braking = .93 // коэф. торможения

    x = 0
    y = 0

    velocity = { x: 0, y: 0, max: 30 }

    speed = .5;

    width = 10
    height = 10

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

    }

    static generate(count=1) {

        for(let i=0;i<count;i++)
            new Entity(
                Generator.random(0, window.innerWidth-10),
                Generator.random(0, window.innerHeight-10)
            )

    }

}