class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    const newNode = new Node(element)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  insert(position, element) {
    const newNode = new Node(element)
    if (position > -1 && position < this.length) {
      if (position === 0) {
        const current = this.head
        this.head = newNode
        this.head.next = current
      } else {
        let index = 0
        let current = this.head
        let previous = null
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = newNode
        newNode.next = current
      }
      this.length++
    }
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current
      if (position === 0) {
        current = this.head
        this.head = current.next
      } else {
        let index = 0
        current = this.head
        let previous = null
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      current.next = null
      return current
    }
    return null
  }

  indexOf(element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  remove(element) {
    const removeIndex = this.indexOf(element)
    if (removeIndex !== -1) {
      return this.removeAt(removeIndex)
    }
    return null
  }

  isEmpty () {
    return this.length === 0
  }

  size () {
    return this.length
  }
}

module.exports = LinkedList

// const linkNode = new LinkedList()

// linkNode.append(1)
// linkNode.append(2)
// linkNode.append(3)
// linkNode.append(4)
// console.log(linkNode.remove(3))
// console.log(linkNode.remove(2))
// console.log(linkNode.remove(12))
// console.log(linkNode.head)
// console.log(linkNode.indexOf(1))
// console.log(linkNode.indexOf(2))
// console.log(linkNode.indexOf(3))
// console.log(linkNode.indexOf(4))
// console.log(linkNode.indexOf(5))
// console.log(linkNode.removeAt(1))
// linkNode.insert(0, 100)
// linkNode.insert(2, 200)
// console.log(linkNode.head, linkNode.length)
