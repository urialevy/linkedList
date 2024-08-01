export class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new Node(value, null);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode) {
        if (currentNode.nextNode === null) {
          currentNode.nextNode = newNode;
          return;
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
      let newNode = new Node(value, null);
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
      res = res.concat(`( ${currentNode.value} )`, " -> ");
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
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count == index) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      count = count + 1;
    }
    const err = new Error(
      `${index} is greater than the list size of ${this.size()}`
    );
    throw err;
  }

  pop() {
    if (this.head == null) {
      const err = new Error(`no nodes in list`);
      console.log(err);
      throw err;
    }
    if (this.head.nextNode == null) {
      this.head = null;
      return;
    }
    let currentNode = this.head;
    let newTail = this.head;
    while (currentNode.nextNode) {
      newTail = currentNode;
      currentNode = currentNode.nextNode;
    }
    console.log(newTail, currentNode);
    currentNode = null;
    newTail.nextNode = null;
    return;
  }

  contains(value) {
    if (this.head == null) {
      const err = new Error(`no nodes in list`);
      throw err;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.head == null) {
      const err = new Error(`no nodes in list`);
      throw err;
    }
    let i = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return i;
      }
      i = i + 1;
      currentNode = currentNode.nextNode;
    }
    return `"${value}" not found in list`;
  }
  insertAt(value, index){
    if (index < 0) {
      const err = new Error(`Cannot insert at negative index`)
      throw err
    }
    let newNode = new Node(value, null);
    let previousNode;
    if (index == 0) {
      newNode.nextNode = this.head
      this.head = newNode
      return
    }
    let count = 0;
    let currentNode = this.head
    while(currentNode) {
      if (count == index) {
        if (currentNode.nextNode === null) {
          currentNode.nextNode = newNode;
          return;
        }
        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;
        return
        
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode
      count = count+1;
    }
    const err = new Error(`index ${index} exceeds list length`)
    throw err
  }
  removeAt(index){
    if (this.head == null) {
      const err = new Error(`Cannot remove from empty list`)
      throw err;
    }
    if (index < 0) {
      const err = new Error(`Cannot insert at negative index`)
      throw err
    }
    if (index == 0) {
      this.head = this.head.nextNode;
      return
    }
    let currentNode = this.head
    let previousNode;
    let newNextNode;
    let count = 0
    while (currentNode) {
      if (count == index) {
        if (currentNode.nextNode == null) {
          console.log(`final node`)
          previousNode.nextNode = null;
          currentNode = null;
          return
        }
        previousNode.nextNode = newNextNode;
        currentNode = null;
        return
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode
      newNextNode = currentNode.nextNode
      count = count+1;
    }
    const err = new Error(`index ${index} exceeds list length`)
    throw err
  }
}
