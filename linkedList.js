export class node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = null;
  }
}

export class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(value) {
    let newNode = new node(value, null);
    if (this.head == null) {
      this.head = newNode;
    } else {
    }
    this.length = this.length + 1;
  }
  prepend() {
    if (this.list.length < 1) {
      const err = new Error(
        `list cannot be appended with a length of less than 1`
      );
      throw err;
    }
  }
  printList() {
    let res = "";
    if (this.head == null) {
      return `Empty list`;
    }
    let currentNode = this.head;
    while (currentNode) {
      res = res.concat(currentNode.value, " -> ");
      currentNode = currentNode.nextNode;
    }
    res = res.concat(null);
    return res;
  }
}
