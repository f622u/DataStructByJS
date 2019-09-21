/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = [];
  this.head = -1;
  this.tail = -1;
  this.size = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (!this.isFull()) {
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;
    return true;
  } else {
    return false;
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (!this.isEmpty()) {
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.size;
    }
    return true;
  } else {
    return false;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.head === -1 ? -1 : this.queue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.tail === -1 ? -1 : this.queue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === -1 && this.tail === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.head === (this.tail + 1) % this.size;
};

MyCircularQueue.createNew = function(k) {
  return new MyCircularQueue(k);
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/** 
 * the test code
*/
// var obj = Object.create(MyCircularQueue).createNew(7);
// obj.enQueue(1);
// obj.enQueue(2);
// obj.enQueue(3);
// obj.enQueue(4);
// obj.enQueue(5);
// obj.deQueue();
// obj.deQueue();
// obj.enQueue(6);
// obj.enQueue(7);
// obj.enQueue(8);
// obj.enQueue(9);
// obj.enQueue(10);
// obj.deQueue();
// console.log(obj.Front());
// console.log(obj.Rear());
// console.log(obj.isFull());

// var _queue = document.getElementById("queue");
// var _head = document.getElementById("head");
// var _tail = document.getElementById("tail");

// _queue.innerText = obj.queue;
// _head.innerText = obj.head;
// _tail.innerHTML = obj.tail;
