import Entity from "./Entities/Entity.js";
import Generator from "./Tools/Generator.js";
import Coin from "./Entities/Coin.js";

export default class Game {

    static ctx
    static cnv

    static start(cnv) {

        this.cnv = cnv
        this.ctx = cnv.getContext('2d')

        this.cnv.style.background = Generator.randomColor(.1);

        Coin.generate(10000)

        this.events();
        this.loop();

    }

    static loop() {
        requestAnimationFrame(Game.loop)
        Game.movement();
        Game.render();
    }

    static render() {
        Game.ctx.clearRect(0, 0, Game.cnv.width, Game.cnv.height);
        Entity.list.forEach(entity => entity.render(Game.ctx))
    }

    static movement() {
        Entity.list.forEach(entity => entity.move() )
    }

    static events() {
        window.addEventListener('resize', e => {
            this.cnv.width  = window.innerWidth;
            this.cnv.height = window.innerHeight;
        })
        window.addEventListener('click', e => {
            Entity.list.forEach(entity => {
                const
                    x = entity.x - e.clientX,
                    y = entity.y - e.clientY,
                    r = Math.sqrt(x**2 + y**2)

                entity.velocity.y += 1000 * y / r**2
                entity.velocity.x += 1000 * x / r**2

            })
        })
    }

}