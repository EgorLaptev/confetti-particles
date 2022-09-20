export default class Controller {

    pressedKeys = {}
    braking = .93

    constructor(entity) {
        this.entity = entity;
        this.events()
    }

    move() {

        const e = this.entity;

        if (this.pressedKeys['KeyA'] && this.entity.velocity.x > -this.entity.velocity.max) this.entity.velocity.x -= this.entity.speed
        if (this.pressedKeys['KeyD'] && this.entity.velocity.x < this.entity.velocity.max) this.entity.velocity.x += this.entity.speed

    }

    events() {
        window.addEventListener('keydown', e => {
            this.pressedKeys[e.code] = true
            if (e.code === 'Space') this.entity.jump();
        })
        window.addEventListener('keyup', e => this.pressedKeys[e.code] = false)
    }

}