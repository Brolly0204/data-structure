class QueueItem {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

const wm = new WeakMap()

class PriorityQueue {
  constructor() {
    wm.set(this, [])
  }

  enqueue(element, priority) {
    const queue = wm.get(this)
    const queueItem = new QueueItem(element, priority)
    for (let i = 0; i < queue.length; i++) {
      if (queueItem.priority > queue[i].priority) {
        queue.splice(i, 0, queueItem)
        return
      }
    }
    queue.push(queueItem)
  }

  dequeue() {
    const queue = wm.get(this)
    return queue.shift()
  }

  peek() {
    const queue = wm.get(this)
    return queue[0]
  }

  output() {
    return wm.get(this)
  }
}

module.exports = PriorityQueue

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue('小明', 10)
priorityQueue.enqueue('小丽', 12)
priorityQueue.enqueue('小美', 11)
// priorityQueue.dequeue()
console.log(priorityQueue.output())
