export default class HUD {

    static y = 70
    static x = 100

    static render(ctx, health, points, time) {

        return false;

        /* timer */
        ctx.fillStyle = 'white';
        ctx.font = 'normal 30px sans-serif'
        ctx.fillText(time, this.x, this.y)

    }

}