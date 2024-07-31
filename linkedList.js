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
    return i;
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

  at(index) {
    if (index < 0) {
      const err = new Error(`invalid list length`);
      throw err;
    }
    if (index > this.size()) {
      const err = new Error(
        `${index} is greater than the list size of ${this.size()}`
      );
      throw err;
    }
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count == index) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      count = count + 1;
    }
  }

  pop() {
    if (this.size < 1) {
      const err = new Error(`no elements in list`);
      throw err;
    }
    if (this.size == 1) {
      this.head.nextNode = null;
      this.head.value = null;
    }
    let currentNode = this.head;
    let newTail = this.head;
    while (currentNode) {
      if (currentNode.nextNode == null) {
        while (newTail) {
          if (newTail.nextNode == currentNode) {
            currentNode.nextNode = null;
            currentNode.value = null;

            newTail.nextNode = null;
          }
          newTail = newTail.nextNode;
        }
      }
      currentNode = currentNode.nextNode;
    }
  }

  contains(value) {}

  find(value) {}
}
