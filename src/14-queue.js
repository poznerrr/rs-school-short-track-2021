const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = null;
  }

  getsize() {
    let size = 0;
    if (this.list.value) {
      size++;
    }
    let node = this.list;
    while (node.next) {
      node = node.next;
      size++;
    }
    return size;
  }

  enqueue(element) {
    if (this.list === null) {
      this.list = new ListNode(element);
    } else {
      let node = this.list;
      while (node.next) {
        node = node.next;
      }
      node.next = new ListNode(element);
    }
  }

  dequeue() {
    const peak = this.list.value;
    this.list = this.list.next;
    return peak;
  }
}

module.exports = Queue;
