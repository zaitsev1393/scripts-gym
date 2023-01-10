const l = console.log;

class Node {
  value = null;
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head = null;
  tail = null;
  constructor() {
  }
  
  length() {
    let l = this.head ? 1 : 0;
    let node = this.head;
    while(node.next) {
      ++l;
      node = node.next;
    }
    return l;
  }
  
  add(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      return;
    }
    if(!this.tail) {
      this.tail = node;
      this.head.next = this.tail;
      this.tail.prev = this.head;
      return;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  
  print() {
    let node = this.head;
    let str = `${ node.value } -`;
    while(node.next) {
      node = node.next;
      str += ` ${ node.value }${ node.next ? ' -' : ''}`;
    }
    console.log(str);
  }
  
  insert(v1, v2, newV) {
    let node = this.head;
    while(node.next) {
      if(node.value === v1 && node.next.value === v2) {
        let newNode = new Node(newV);
        newNode.next = node.next;
        newNode.prev = node;
        node.next.prev = newNode;
        node.next = newNode;
      }
      node = node.next;
    }
  }
  
  delete(value) {
    let node = this.head;
    if(this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    
    if(this.tail.value === value) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      return;
    }
    
    while(node.next) {
      if(node.value === value) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return;
      }
      node = node.next;
    }
  }
  
  getHead() {
    return this.head;
  }
  
  getTail() {
    return this.tail;
  }
}