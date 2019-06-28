class Node {
  constructor(data) {
    this.data = data
    this.left = this.right = null
  }
}

class BST {
  constructor(data) {
    this.root = new Node(data)
    this.size = 1
  }
  size() {
    return this.size
  }
  insert(data) {
    this.size++
    let newNode = new Node(data)

    const searchTree = node => {
      if (data < node.data) {
        // if there is no left child then append node there
        if (!node.left) {
          node.left = newNode
        } else {
          // if there is a left child then compare that child
          searchTree(node.left)
        }
      }
      else if (data > node.data) {
        if (!node.right) {
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
    }

    searchTree(this.root)
  }
  min() {
    let currentNode = this.root

    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.data
  }
  max() {
    let currentNode = this.root

    while (currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.data
  }
  contains(data) {
    let currentNode = this.root

    while (currentNode) {
      if (data === currentNode.data) {
        return true
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
  }
  //depth first search

  //in-order left, root, right
  //2, 3, 12, 15, 28, 36, 39
  dfsInOrder() {
    let result = []

    const traverse = node => {
      if (node.left) traverse(node.left)
      result.push(node.data) //push to stack
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return result
  }
  //pre-order root, left, right
  //15, 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = []

    const traverse = node => {
      result.push(node.data)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return result
  }
  //post-order left, right, root
  //2, 12, 3, 28, 39, 36, 15
  dfsPostOrder() {
    let result = []

    const traverse = node => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.data)
    }

    traverse(this.root)
    return result
  }
  //breadth first search
  //15, 3, 36, 2, 12, 28, 29
  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)

    while (queue.length) {
      let currentNode = queue.shift()

      result.push(currentNode.data)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      } 
    }

    return result
  }
}

let bst = new BST(15)

bst.insert(3)
bst.insert(2)
bst.insert(12)

bst.insert(36)
bst.insert(28)
bst.insert(39)

console.log(bst.dfsInOrder())
console.log(bst.dfsPreOrder())
console.log(bst.dfsPostOrder())
console.log(bst.bfs())