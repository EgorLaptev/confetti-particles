export default class Timer {

    intervalId = null
    time = 0

    start() {
        this.intervalId = setInterval(() => this.time+=1, 1000)
    }

    reset() {
        clearInterval(this.intervalId)
        this.time = 0
    }

    pause() {
        clearInterval(this.intervalId)
    }

    format() {

        const
            minutes = String(Math.floor(this.time / 60)).padStart(2, '0'),
            seconds = String(this.time % 60).padStart(2, '0')

        return `${minutes}:${seconds}`

    }

}