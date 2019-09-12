const Queue = require('./2.Queue')
const Stack = require('./1.stack')

class Graph {
  constructor() {
    // 顶点
    this.vertices = []
    // 边
    this.adjList = {}
  }

  addVertex(v) {
    this.vertices.push(v)
    this.adjList[v] = []
  }

  addEdge(a, b) {
    this.adjList[a].push(b)
    this.adjList[b].push(a)
  }

  initColor() {
    const color = {}
    for (let i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = 'white'
    }
    return color
  }

  bfs(v, callback) {
    const colors = this.initColor()
    const queue = new Queue()
    queue.enqueue(v)

    const dis = {}
    const pred = {}
    const { vertices } = this
    for (let i = 0; i < vertices.length; i++) {
      dis[vertices[i]] = 0
      pred[vertices[i]] = null
    }

    while (!queue.isEmpty()) {
      const now = queue.dequeue()
      const edge = this.adjList[now]
      for (let i = 0; i < edge.length; i++) {
        const w = edge[i]
        if (colors[w] === 'white') {
          queue.enqueue(w)
          colors[w] = 'grey'
          dis[w] = dis[now] + 1
          pred[w] = now
        }
      }
      colors[now] = 'black'
      if (callback) {
        callback(now)
      }
    }
    return {
      pred,
      dis
    }
  }

  dfsTraverse(v, colors, callback) {
    colors[v] = 'grey'
    const vertices = this.adjList[v]
    for (let i = 0; i < vertices.length; i++) {
      const vert = vertices[i]
      if (colors[vert] === 'white') {
        callback(vert)
        this.dfsTraverse(vert, colors, callback)
      }
    }
  }

  dfs(v, callback) {
    const colors = this.initColor()
    this.dfsTraverse(v, colors, callback)
  }

  print() {
    let s = '\n'
    for (let i = 0; i < this.vertices.length; i++) {
      const vertex = this.vertices[i]
      s += `${vertex} => `
      const edge = this.adjList[vertex]
      for (let j = 0; j < edge.length; j++) {
        s += edge[j]
      }
      s += '\n'
    }
    return s
  }
}

function shortestPath(from, to, graph) {
  let v = to
  const paths = new Stack()
  while (v !== from) {
    paths.push(v)
    v = graph.pred[v]
  }
  paths.push(v)
  let str = ''
  while (!paths.isEmpty()) {
    str += `${paths.pop()}-`
  }
  str = str.slice(0, str.length - 1)
  return str
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'E')
graph.addEdge('C', 'D')
graph.addEdge('F', 'B')
// console.log(graph.adjList)
// console.log(graph.print())
const recall = graph.bfs('A', (item) => {
  // console.log(item)
})

console.log(recall)
console.log(shortestPath('A', 'F', recall))
graph.dfs('A', (item) => {
  console.log(item)
})
