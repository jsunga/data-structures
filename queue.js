class Queue {

  constructor() {
    this.storage = {}
    this.head = 0
    this.tail = 0
  }

  enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
  }

  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  }

}

const queue = new Queue()

queue.enqueue('seahorse')
queue.enqueue('dolphin')
queue.enqueue('whale shark')

console.log(queue.dequeue())
console.log(queue)

console.log(queue.dequeue())
console.log(queue)

/*

Queue
- linear data structures
- a line of people in a movie theater
- add to the queue
- remove from the queue
- first in first out
- printer queue
- useful in solving certain techinical problems
- palindrome finder

*/