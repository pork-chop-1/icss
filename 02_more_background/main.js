import './main.scss'
import '../index.js'

const TIMER_STATUS = {
  STOP: 'STOP',
  RUNNING: 'RUNNING',
  PAUSE: 'PAUSE'
}

class Timer {
  constructor(callback) {
    this.status = TIMER_STATUS.STOP
    this.count = 0
    this.callback = callback
    this.handler = null
  }
  start() {
      if(this.status !== TIMER_STATUS.STOP) {
        alert('running')
        return
      }
      this.status = TIMER_STATUS.RUNNING
      this.caller()
      this.handler = setInterval(() => {
        this.count++
        this.caller()
      }, 1000)
  }
  pause() {
    if(this.status === TIMER_STATUS.STOP) {
      console.warn(this.status)
      return
    }
    if (this.handler) {
      this.status = TIMER_STATUS.PAUSE
      clearInterval(this.handler)
      this.handler = null
    } else {
      this.status = TIMER_STATUS.RUNNING
      this.caller()
      this.handler = setInterval(() => {
        this.count++
        this.caller()
      }, 1000)
    }
  }
  stop() {
    this.reset()
    this.status = TIMER_STATUS.STOP
  }
  change() {
    this.max = Number(e.target.value)
  }
  reset() {
    clearInterval(this.handler)
    this.handler = null
    this.count = 0
  }
  caller() {
    if (this.count >= this.max) {
      this.reset()
      return
    }
    this.callback(this.count)
  }
}

const timer = new Timer((count) => {
  // dosome
  countWrapper.innerHTML = count
})
console.log(timer)

const countWrapper = document.querySelector('.count')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const maxHolder = document.querySelector('.max')

timer.max = 20
startBtn.addEventListener('click', timer.start.bind(timer))
pauseBtn.addEventListener('click', timer.pause)
stopBtn.addEventListener('click', timer.stop)
maxHolder.addEventListener('change', timer.change)