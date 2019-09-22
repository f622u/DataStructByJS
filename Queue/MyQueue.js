/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyQueue = function(k) {
  this.queue = [];
  this.size = k;
  this.count = 0;
};

/**
* Insert an element into the queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyQueue.prototype.enQueue = function(value) {
  if (!this.isFull()) {
      this.queue.push(value);
      this.count++ ;
      return true;
  } else {
      return false;
  }
};

/**
* Delete an element from the queue. Return true if the operation is successful.
* @return {boolean}
*/
MyQueue.prototype.deQueue = function() {
  if (!this.isEmpty()) {
      this.queue.shift();
      this.count-- ;
      return true;
  } else {
      return false;
  }
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyQueue.prototype.Front = function() {
  return !this.isEmpty() ? this.queue[0] : -1;
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyQueue.prototype.Rear = function() {
  return !this.isEmpty() ? this.queue[this.queue.length-1] : -1;
};

/**
* Checks whether the queue is empty or not.
* @return {boolean}
*/
MyQueue.prototype.isEmpty = function() {
  return this.count === 0;
};

/**
* Checks whether the queue is full or not.
* @return {boolean}
*/
MyQueue.prototype.isFull = function() {
  return this.count === this.size;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/