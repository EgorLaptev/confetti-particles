export default class Generator {

    static random(min=0, max=100) {
        return Math.random() * (max - min) + min;
    }

    static randomColor(brightness=1) {

        const
            r = this.random(100*brightness, 256*brightness),
            g = this.random(100*brightness, 256*brightness),
            b = this.random(100*brightness, 256*brightness);

        return `rgb(${r},${g},${b})`

    }

}