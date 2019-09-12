const Queue = (() => {
  const wm = new WeakMap()
  class LocalQueue {
    constructor() {
      wm.set(this, [])
    }

    enqueue(ele) {
      const queue = wm.get(this)
      queue.push(ele)
    }

    dequeue() {
      const queue = wm.get(this)
      return queue.shift()
    }

    front() {
      const queue = wm.get(this)
      return queue[0]
    }

    isEmpty() {
      const queue = wm.get(this)
      return queue.length === 0
    }

    size() {
      const queue = wm.get(this)
      return queue.length
    }

    output() {
      console.log(wm.get(this))
    }
  }
  return LocalQueue
})()

module.exports = Queue
