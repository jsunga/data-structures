class Stack {
  constructor() {
    this.storage = {}
    this.size = 0
  }
  push(element) {
    this.size++
    this.storage[this.size] = element
  }
  pop() {
    let removed = this.storage[this.size]
    delete this.storage[this.size]
    this.size--
    return removed
  }
  peek() {
    return this.storage[this.size]
  }
}

const stack = new Stack()

stack.push('dog')
stack.push('cat')
stack.push('bear')

console.log(stack)
console.log(stack.peek())

stack.pop()

console.log(stack)

/*

Stacks
- linear data structures
- a stack of plates
- can only add and remove items from the top of the stack
- last in first out
- a text editor undo/redo function
- useful in solving certain techinical problems
- closing parentheses validation

*/
