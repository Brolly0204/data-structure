const LocalSet = (() => {
  const items = Symbol()
  class LocalSet {
    constructor() {
      this[items] = {}
    }

    has(value) {
      return this[items].hasOwnProperty(value)
    }

    add(value) {
      if (!this.has(value)) {
        this[items][value] = value
        return true
      }
      return false
    }

    remove(value) {
      if (this.has(value)) {
        delete this[items][value]
        return true
      }
      return false
    }

    clear() {
      this[items] = {}
    }

    size() {
      return Object.keys(this[items]).length
    }

    values() {
      return Object.values(this[items])
    }

    entries() {
      return Object.entries(this[items])
    }

    union(otherSet) {
      const set = new LocalSet()
      let values = this.values()
      for (let i = 0; i < values.length; i++) {
        set.add(values[i])
      }
      values = otherSet.values()
      for (let i = 0; i < values.length; i++) {
        set.add(values[i])
      }
      return set
    }

    intersection(otherSet) {
      const set = new LocalSet()
      const values = this.values()
      for (let i = 0; i < values.length; i++) {
        if (otherSet.has(values[i])) {
          set.add(values[i])
        }
      }
      return set
    }

    difference(otherSet) {
      const set = new LocalSet()
      const values = this.values()
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          set.add(values[i])
        }
      }
      return set
    }
  }
  return LocalSet
})()

const s1 = new LocalSet()
const s2 = new LocalSet()

// s1.add(0)
// s1.add(1)
// s1.add(2)
// s1.add(3)

// s2.add(2)
// s2.add(3)
// s2.add(4)
// s2.add(5)

// console.log(s1.union(s2))
// console.log(s1.intersection(s2))
// console.log(s1.difference(s2))
// console.log(s2.difference(s1))

const s3 = new Set([1, 2, 3, 4])
const s4 = new Set([3, 4, 5, 6])

// 并集
const union = new Set([...s3, ...s4])
console.log(union)

// 交集
const intersection = new Set([...s3].filter((x) => s4.has(x)))
console.log(intersection)

// 差集
const difference = new Set([...s3].filter((x) => !s4.has(x)))
console.log(difference)
