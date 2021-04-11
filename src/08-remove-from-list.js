/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  let answer = null;
  let node = null;
  let current = l;
  while (true) {
    if (current.value === k) {
      current = current.next;
    } else if (answer === null) {
      answer = new ListNode(current.value);
      node = answer;
      current = current.next;
    } else {
    /*  while (node.next) {
        node = node.next;
      } */
      node.next = new ListNode(current.value);
      current = current.next;
      node = node.next;
    }
    if (current === null) {
      return answer;
    }
  }
}

module.exports = removeKFromList;
