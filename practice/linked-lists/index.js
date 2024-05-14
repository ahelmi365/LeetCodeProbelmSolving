class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertAfter(node, data) {
    const newNode = new Node(data);
    newNode.next = node.next;
    node.next = newNode;
  }

  deletNode(data) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.data !== data) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
  }
}

const myList = new LinkedList();
console.log(myList);

myList.append({ name: "Ali", age: 30 });
myList.append({ name: "Taha", age: 50 });
myList.append({ name: "Mohamed", age: 40 });
console.log(myList);
