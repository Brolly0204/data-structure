const table = []

class HashNode {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class HashTable {
  loseloseHashCode(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  djb2HashCode(key) {
    let hash = 5381
    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }

  put(key, value) {
    const position = this.djb2HashCode(key)
    if (!table[position]) {
      table[position] = new HashNode(key, value)
    } else {
      let index = position
      while (table[++index] !== undefined) {}
      table[index] = new HashNode(key, value)
    }
  }

  get(key) {
    const position = this.djb2HashCode(key)
    let index = position
    while (table[index]) {
      if (table[index].key === key) {
        return table[index].value
      }
      index++
    }
  }
}

const hash = new HashTable()
hash.put('Jamie', 'www.Jamie.com') // 5-Jamie
hash.put('Sue', 'www.Sue.com') // 5-Sue
console.log(hash.get('Jamie'))
console.log(hash.get('Sue'))
console.log(table)
