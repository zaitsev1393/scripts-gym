type Node<T> = {
  value: T;
  next?: Node<T>;
}
export default class Queue<T> {
  public length: number;
  head?: Node<T>;
  tail?: Node<T>;
  constructor() {
      this.head = undefined;
      this.tail = undefined;
      this.length = 0;
  }

  enqueue(item: T): void {
    let node = { value: item } as Node<T>;
    this.length++;
    if(!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if(!this.head) return undefined;
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const queue = new Queue();

queue.enqueue(11);
queue.enqueue(13);
queue.length;
queue.deque();
queue.peek();