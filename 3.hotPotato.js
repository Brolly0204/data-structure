const Queue = require('./2.Queue')

const hotPotato = function(elementList, num) {
  const queue = new Queue()
  const eliminators = [];
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    const loser = queue.dequeue()
    eliminators.push(loser)
  }

  return {
    eliminators,
    winner: queue.dequeue()
  }
}

console.log(hotPotato(['a', 'b', 'c', 'd', 'e', 'f'], 3))
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
console.log(hotPotato(names, 7))
