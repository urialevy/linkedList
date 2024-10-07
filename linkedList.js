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
      throw new Error(`list cannot be appended with a length of less than 1`);
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
      throw new Error(`invalid list length`);
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
    throw new Error(`${index} is greater than the list size of ${this.size()}`);
  }

  pop() {
    if (this.head == null) {
      throw new Error(`no nodes in list`);
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
      throw new Error(`no nodes in list`);
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
      throw new Error(`no nodes in list`);
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
  insertAt(value, index) {
    if (index < 0) {
      const err = new Error(`Cannot insert at negative index`);
      throw err;
    }
    let newNode = new Node(value, null);
    let previousNode;
    if (index == 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (count == index) {
        if (currentNode.nextNode === null) {
          currentNode.nextNode = newNode;
          return;
        }
        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count = count + 1;
    }
    throw new Error(`index ${index} exceeds list length`);
  }
  removeAt(index) {
    if (this.head == null) {
      const err = new Error(`Cannot remove from empty list`);
      throw err;
    }
    if (index < 0) {
      throw new Error(`Cannot insert at negative index`);
    }
    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }
    let currentNode = this.head;
    let previousNode;
    let newNextNode;
    let count = 0;
    while (currentNode) {
      if (count == index) {
        if (currentNode.nextNode == null) {
          console.log(`final node`);
          previousNode.nextNode = null;
          currentNode = null;
          return;
        }
        previousNode.nextNode = newNextNode;
        currentNode = null;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      newNextNode = currentNode.nextNode;
      count = count + 1;
    }
    throw new Error(`index ${index} exceeds list length`);
  }

  middleNode() {
    if (this.head == null) {
      throw new Error(`No linked list`);
    }
    const mid = Math.floor(this.size() / 2);
    return this.at(mid);
  }

  // reverse(){
  //   if (this.head == null) {
  //     throw new Error (`No linked list`)
  //   }
  //   let currentNode = this.head;
  //   const reversedList = new LinkedList();
  //   reversedList.append(this.head.value)
  //   if (reversedList.currentNode.nextNode == null) {
  //     return reversedList
  //   }
  //   currentNode = currentNode.nextNode

  //   while (currentNode) {
  //     reversedList.prepend(currentNode.value)
  //     currentNode = currentNode.nextNode;
  //   }
  //   return reversedList;

  // }

  reverse() {
    if (this.head == null || this.head.nextNode == null) {
      return this;
    }
    let currentNode = this.head;
    let previousNode;
    let newNextNode = currentNode.nextNode;
    while (currentNode) {
      newNextNode = newNextNode.nextNode;
      currentNode.nextNode = previousNode;
      previousNode = currentNode;
      currentNode = newNextNode;
    }
    this.head.nextNode = null;
    this.head = previousNode;

    return this;
  }

  /* TODO: 
  create doubly linked list
  reverse doubly linked list
  return nth node from end of list
  delete last occurence of item from a linked list
  remove duplicate elements from a sorted linked liest
  detect loop in linked list
  delete n nodes after m nodes of a linked list
  merge a linked list into another linked list at alternate positions


  */
}
