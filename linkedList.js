class Node {
  constructor(data) {
    this.data = data
    this.prev = this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null
    this.size = 0
  }
  pushFront(data) {
    if (this.size === 0) {
      this.head = this.tail = new Node(data)
    } else {
      let oldHead = this.head
      this.head = new Node(data)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
    this.size++
  }
  pushBack(data) {
    if (this.size === 0) {
      this.head = this.tail = new Node(data)
    } else {
      let oldTail = this.tail
      this.tail = new Node(data)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
    this.size++
  }
  popFront() {
    if (this.size === 0) {
      console.log('nothing to pop')
      return null
    } else {
      let removedHead = this.head
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      this.size--
      return removedHead
    }
  }
  popBack() {
    if (this.size === 0) {
      console.log('nothing to pop')
      return null
    } else {
      let removedTail = this.tail
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.tail = this.tail.prev
        this.tail.next = null
      }
      this.size--
      return removedTail
    }
  }
  insert(data, index) {
    if (index === 0) { this.pushFront(data) }
    else if (index === this.size) { this.pushBack(data) }
    else if (index < 0 || index > this.size) {
      console.log('invalid index')
      return null
    }
    else if (index > 0 && index < this.size) {
      let newNode = new Node(data)
      let cur = this.head
      let prev = null
      for (let i = 0; i < index; i++) {
        prev = cur
        cur = cur.next
      }
      prev.next = newNode
      newNode.prev = prev
      newNode.next = cur
      cur.prev = newNode
    }
    this.size++
  } 
  reverseList() {
    let cur = this.head
    let temp = null
    while (cur !== null) {
      temp = cur.prev
      cur.prev = cur.next
      cur.next = temp
      cur = cur.prev
    }
    if (temp !== null) { this.head = temp.prev }
    let node = this.head
    while (node.next !== null) { node = node.next }
    this.tail = node
  }
  print() {
    let walk = this.head
    let arr = []
    while (walk !== null) {
      arr.push(walk.data)
      walk = walk.next
    }
    console.log(arr)
  }
  printSize() {
    console.log(this.size)
  }
}

let list = new LinkedList()
list.pushFront(5)
list.pushFront(4)
list.pushFront(3)
list.pushFront(2)
list.pushFront(1)
list.print()
list.reverseList()
list.print()