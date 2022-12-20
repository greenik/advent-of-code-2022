export class Node {
  next: Node | null = null;
  prev: Node| null = null;
  list: LinkedList | null = null;
  value: number;

  constructor(value: number, list: LinkedList) {
    this.value = value;
    this.list = list;
    this.list.size++;
  }

  move(): void {
    if (this.value === 0 || (this.value%(this.list!.size - 1) === 0)) return;

    // removing this links
    this.prev!.next = this.next;
    this.next!.prev = this.prev;

    const modulo = this.value % (this.list!.size - 1);
    const absValue = Math.abs(modulo);

    let replaceWithNode: Node = this;
    for (let i = 0; i < absValue; i++) {
      if (this.value > 0) {
        replaceWithNode = replaceWithNode.next as Node;
      } else {
        replaceWithNode = replaceWithNode.prev as Node;
      }
    }

    //moving THIS between destination
    if (this.value > 0) {
      this.next = replaceWithNode.next;
      replaceWithNode.next!.prev = this;
      replaceWithNode.next = this;
      this.prev = replaceWithNode;
    } else {
      this.prev = replaceWithNode.prev;
      replaceWithNode.prev!.next = this;
      replaceWithNode.prev = this;
      this.next = replaceWithNode;
    }
  }
}

export class LinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  size: number = 0;

  push(value: number) {
    const node = new Node(value, this);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail!.next = node;
      this.tail = node;
      node.next = this.head;
      this.head.prev = node;
    }
    return node;
  }

  getAllNodes(): Node[] {
    if (!this.head) {
      return [];
    }

    const array: Node[] = [];
    const addToArray = (node: Node): Node[] => {
      array.push(node);
      return node.next === this.head ? array : addToArray(node.next as Node)
    };
    return addToArray(this.head);
  }

  getNodeWithValue(value: number): Node | null {
    if (this.head?.value === value) {
      return this.head;
    }
    let checkingNode = this.head?.next;
    while (checkingNode) {
      if (checkingNode.value === value) {
        return checkingNode;
      }
      if (checkingNode === this.head) {
        return null;
      }
      checkingNode = checkingNode.next;
    }
    return null;
  }
}
