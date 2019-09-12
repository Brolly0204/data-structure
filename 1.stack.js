const Stack = (function() {
  const wm = new WeakMap()
  class LocalStack {
    constructor() {
      wm.set(this, [])
    }

    push(val) {
      const stack = wm.get(this)
      stack.push(val)
    }

    pop() {
      const stack = wm.get(this)
      return stack.pop()
    }

    peek() {
      const stack = wm.get(this)
      return stack[stack.length - 1]
    }

    size() {
      const stack = wm.get(this)
      return stack.length
    }

    isEmpty() {
      const stack = wm.get(this)
      return stack.length === 0
    }

    output() {
      const stack = wm.get(this)
      return stack
    }

    clear() {
      wm.set(this, [])
    }
  }
  return LocalStack
}())

module.exports = Stack
