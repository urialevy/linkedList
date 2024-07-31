export class node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = null;
  }
}

export class linkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new node(value, null);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode) {
        if (currentNode.nextNode === null) {
          currentNode.nextNode = newNode;
          return newNode;
        }
        currentNode = currentNode.nextNode;
      }
    }
  }
  prepend(value) {
    if (this.head == null) {
      const err = new Error(
        `list cannot be appended with a length of less than 1`
      );
      throw err;
    } else {
      let newNode = new node(value, null);
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }
  toString() {
    let res = "";
    if (this.head == null) {
      res = `Empty list`;
      return res;
    }
    let currentNode = this.head;
    while (currentNode) {
      res = res.concat(currentNode.value, " -> ");
      currentNode = currentNode.nextNode;
    }
    res = res.concat(null);
    return res;
  }
  size() {
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      i = i + 1;
      currentNode = currentNode.nextNode;
    }
    return `List size: ${i}`;
  }

  header() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.nextNode == null) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}
}
