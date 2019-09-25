/**
 * 题目名称：设计循环队列
 * @param {*} k 
 */

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = [];
  // 初始化时，头指针和尾指针都在同一位置「-1」
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
    // 队列还没满
    if (this.isEmpty()) {
      // 队列为空时，头尾指针指向「-1」，此时把头指针移向0。
      this.head = 0;
    }
    // 入队时，尾指针移动即可。由于是循环队列，所以用尾指针+1除以队列长度取余，即可得指针下一位的坐标。将下一位坐标赋予尾指针，即尾指针向后移动一位。
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
      // 头尾指针同时指向同一个坐标时，证明队列为空，此时将头尾指针归向初始化。
      this.head = -1;
      this.tail = -1;
    } else {
      // 队列不为空时，将头指针移向下一个坐标，即一个元素出队。
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
  // 当头尾指针同时指向「-1」时，即为初始化时的情景，队列即空。
  return this.head === -1 && this.tail === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  // 尾指针的下一个指向头指针时，队列即满。但由于是循环队列，所以用尾指针+1除以队列长度取余，即可得指针下一位的坐标。
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
 * 以下是测试代码
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
