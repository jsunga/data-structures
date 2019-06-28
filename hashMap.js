const hash = (key, size) => {
  let hashedKey = 0
  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i)
  }
  return hashedKey % size
}

class HashMap {
  constructor(size) {
    this.arr = []
    this.size = size
  }
  set(key, value) {
    this.arr[hash(key, this.size)] = value
  }
  has(key) {
    if (this.arr[hash(key, this.size)] !== undefined) return true
    else return false
  }
  get(key) {
    return this.arr[hash(key, this.size)]
  }
  print() {
    console.log(this.arr)
  }
}

let hm = new HashMap(10)
hm.set('model', 'corolla')
hm.set('car', 'toyota')
hm.set('engine', 'v4')
console.log(hm.get('car'))