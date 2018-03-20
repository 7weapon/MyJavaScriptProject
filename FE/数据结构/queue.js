"use strict";

class Queue {
  constructor() {
    this._items = []
  }

  enqueue(item) {
    this._items.push(item)
  }

  dequeue(item) {
    this._items.shift()
  }

  front() {
    return this._items[0]
  }

  isEmpty() {
    return this._items.length === 0
  }

  size() {
    return this._items.length
  }

  clear() {
    this._items = []
  }
}

// 优先队列
/*
  元素的添加和移除是基于优先级，实现一个优先队列，用入列的方式添加或删除元素
  最小优先队列：优先级最小的元素放在队列前面
  最大优先队列：优先级最大的元素放在队列前面
 */

class PriorityQueue extends Queue {
  constructor() {
    super()
  }

  enqueue(el, priority) {
    function QueueElement(el, priority) {
      this.element = el
      this.priority = priority
    }

    let queueElement = new QueueElement(el, priority)
    if (this.isEmpty()) {
      this._items.push(queueElement)
    } else {
      let added = false
      let index = this._items.findIndex(el => el.priority > queueElement.priority)
      if (index !== -1) {
        this._items.splice(index, 0, queueElement)
        added = true
      }
      if (!added) {
        this._items.push(queueElement)
      }
    }
  }

  print() {
    let result = ''
    this._items.forEach(el => result += JSON.stringify(el))
    return result
  }
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("cheng", 2);
priorityQueue.enqueue("du", 3);
priorityQueue.enqueue("huang", 1);
console.log(priorityQueue.print());
