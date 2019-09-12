// https://yq.aliyun.com/articles/625367
const LinkedList = require('./5.LinkedList')

class HashNode {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

const table = []
class HashTable {
  loseloseHashCode(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  put(key, value) {
    const position = this.loseloseHashCode(String(key))
    if (table[position]) {
      table[position].append(new HashNode(key, value))
    } else {
      const linkList = new LinkedList()
      table[position] = linkList
      table[position].append(new HashNode(key, value))
    }
  }

  findKey(key, position) {
    let current = table[position].head
    while (current) {
      if (current.element.key === key) {
        return current.element.value
      }
      current = current.next
    }
    return undefined
  }

  get(key) {
    const position = this.loseloseHashCode(String(key))
    if (table[position]) {
      return this.findKey(key, position)
    } else {
      return undefined
    }
  }

  remove(key) {
    const position = this.loseloseHashCode(String(key))
    if (table[position]) {
      let current = table[position].head
      while (current) {
        if (current.element.key === key) {
          table[position].remove(current.element)
          if (table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
    } else {
      return false
    }
  }
}

const hash = new HashTable()

hash.put('Jamie', 'www.Jamie.com') // 5-Jamie
hash.put('Sue', 'www.Sue.com') // 5-Sue
hash.put('Mindy', 'www.Mindy.com') // 32-Mindy
hash.put('Paul', 'www.Paul.com') // 32-Paul
// console.log(hash.get('Jamie'))
console.log(hash.remove('Jamie'))
// console.log(hash.remove('Sue'))
// console.log(hash.get('Sue'))
console.log(JSON.stringify(table))
