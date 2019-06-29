class Graph {

  constructor() {
    this.vertices = []
    this.edges = new Map()
  }

  addVertex(v) {
    //check if vertex already exists
    if (!this.edges.has(v)) {
      this.vertices.push(v)
      this.edges.set(v, [])
    } else {
      console.log('vertex already exists!')
    }
  }

  addEdge(v, edges) {
    //check if edge already exists
    for (let edge of edges) {
      if (!this.edges.get(v).includes(edge)) this.edges.get(v).push(edge)
    }
  }

  //with recursion
  dfs() {
    let result = []
    let visited = new Map()

    const visit = vertex => {
      visited.set(vertex, true)
      result.push(vertex)
      for (let edge of this.edges.get(vertex)) {
        if (!visited.has(edge)) visit(edge)
      }
    }

    for (let vertex of this.vertices) {
      if (!visited.has(vertex)) visit(vertex)
    }

    return result
  } 

  //with queue
  bfs(v) {
    let result = []
    let queue = []
    let visited = new Map()

    result.push(v)
    queue.push(v)
    visited.set(v, true)

    while (queue.length) {
      //dequeue
      let currentNode = queue.shift()
      //visit all adjacent nodes of current node (next node in the queue)
      for (let adjNode of this.edges.get(currentNode)) {
        //check if already visited using hash map
        if (!visited.has(adjNode)) {
          //push to result
          result.push(adjNode)
          //enqueue adjacent nodes
          queue.push(adjNode)
          //mark as visited
          visited.set(adjNode, true)
        }
      }
    }

    return result
  }

  //with stack
  depthFirstSearch(v) {
    let result = []
    let stack = []
    let visited = new Map()

    result.push(v)
    stack.push(v)
    visited.set(v, true)

    while (stack.length) {
      let top = stack[stack.length-1]
      for (let adjNode of this.edges.get(top)) {
        if (!visited.has(adjNode)) {
          result.push(adjNode)
          stack.push(adjNode)
          visited.set(adjNode, true)
          break
        }
      }
      if (top === stack[stack.length-1]) {
        stack.pop()
      }
    }

    return result
  }
  
}

const input = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const g = new Graph()
for (let char of input) {
  g.addVertex(char)
}
g.addEdge('A', ['B', 'C', 'D'])
g.addEdge('B', ['A', 'E', 'C'])
g.addEdge('C', ['A', 'B', 'D', 'F', 'G'])
g.addEdge('D', ['A', 'C', 'G'])
g.addEdge('E', ['B'])
g.addEdge('F', ['C', 'I'])
g.addEdge('G', ['C', 'D', 'H'])
g.addEdge('H', ['G'])
g.addEdge('I', ['F'])

console.log(g.depthFirstSearch('A'))