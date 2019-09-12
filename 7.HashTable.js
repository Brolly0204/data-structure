const list = []
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
    console.log(position, '--', value)
    list[position] = value
  }

  get(key) {
    const position = this.loseloseHashCode(String(key))
    return list[position]
  }

  remove(key) {
    const position = this.loseloseHashCode(String(key))
    list[position] = undefined
  }
}

const hash = new HashTable()

hash.put('Jamie', 'www.Jamie.com') // 5-Jamie
hash.put('Sue', 'www.Sue.com') // 5-Sue
hash.put('Mindy', 'www.Mindy.com') // 32-Mindy
hash.put('Paul', 'www.Paul.com') // 32-Paul
console.log(hash.get('Jamie'))
console.log(hash.get('Sue'))
console.log(hash.get('Mindy'))
console.log(hash.get('Paul'))
