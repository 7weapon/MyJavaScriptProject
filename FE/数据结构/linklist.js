/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2018/3/19 | ChenKai    // 初始版本
 */

"use strict";

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    let node = new Node(element)
    let current
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  insert(position, element) {
    if (position === -1 || position > this.length) {
      return false
    }
    let current = this.head
    let index = 0
    let node = new Node(element)
    let previous

    if (position === 0) {
      node.next = current
      this.head = node
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
    this.length++
    return true
  }

  removeAt(position) {
    if (position === -1 || position > this.length) {
      return null
    }
    let current = this.head,
      previous = null,
      index = 0

    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.element
  }

  remove(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(element) {
    let current = this.head,
      index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  toString() {
    let str = ''
    let current = this.head
    while (current) {
      str += current.element.toString() + ','
      current = current.next
    }
    return str.substr(0, str.length - 1)
  }

  getHead() {
    return this.head
  }
}

/*
  链表的基本使用
 */

/*let ll = new LinkedList()
console.log(ll.isEmpty())

ll.append('a')
ll.append('b')
ll.insert(1,'c')

// ll.removeAt(1)

console.log(ll.toString())*/

class DNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

class DoubleLinkedLink extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }

  append(element) {
    let node = new DNode(element)
    let current
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    }
    this.length++
  }

  insert(position, element) {
    if (position === -1 || position > this.length) {
      return false
    }
    let current = this.head
    let node = new DNode(element)
    let previous
    let index = 0
    if (position === 0) {
      if (!this.head) {
        this.head = node
        this.tail = node
      } else {
        node.next = current
        current.prev = node
        this.head = node
      }
    } else if (position === this.length) {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = node
      node.prev = previous
      node.next = current
    }
    this.length++
    return true
  }

  removeAt(position) {
    if (position === -1 || position > this.length) {
      return null
    }
    let current = this.head
    let previous
    let index = 0
    if (position === this.length) {
      current = this.tail
      this.tail = current.prev
      this.tail.next = null
      return current.element
    }
    while (index++ < position) {
      previous = current
      current = current.next
    }
    previous.next = current.next
    current.next.prev = previous

    this.length--
    return current.element
  }

  remove(element) {
    let index = this.indexOf(element)
    return this.removeAt(index, element)
  }
}

/**
 * 双向链表基本使用
 */

/*let dll = new DoubleLinkedLink()
console.log(dll.isEmpty())
dll.append('a')
dll.append('b')
dll.append('c')
dll.insert(1,'d')
dll.remove('d')
dll.removeAt(1)

console.log(dll.toString(), dll.length)*/

class CircleList extends DoubleLinkedLink {
  constructor() {
    super()
  }

  append(element) {
    let node = new DNode(element)
    if (this.length === 0) {
      this.head = node
      this.tail = node
      this.head.prev = this.tail
      this.tail.next = this.head
    } else {
      let current = this.tail
      current.next = node
      node.prev = current
      node.next = this.head
      this.tail = node
    }
    this.length++
    return true
  }

  insert(position, element) {
    if (position === -1 || position > this.length) {
      return false
    }
    let node = new DNode(element)
    let current = this.head
    let previous
    let index = 0
    if (position === 0) {
      if (!this.head) {
        this.head = node
        this.tail = node
        this.head.prev = this.tail
        this.tail.next = this.head
      } else {
        current = this.head
        current.prev = node
        node.next = current
        node.prev = this.tail
        this.tail.next = node
      }
    } else if (position === this.length) {
      current = this.tail
      previous = current.prev
      previous.next = node
      node.prev = previous
      node.next = current
      current.prev = node
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = node
      current.prev = node
      node.prev = previous
      node.next = current
    }
    this.length++
    return true
  }

  removeAt(position) {
    if (position === -1 || position > this.length) {
      return null
    }
    let index = 0,
      current = this.head,
      previous = current.prev

    if (this.length === position) {
      previous = this.tail.prev
      this.tail = previous
    }

    while (index++ < position) {
      previous = current
      current = current.next
    }

    previous.next = current.next
    current.next.prev = previous

    this.length--
    return current.element
  }

  toString() {
    let current = this.head
    let str = ''
    while (current) {
      str += current.element + ','
      current = current.next
    }
    return str
  }
}

/**
 * 循环列表样例
 */

let cll = new CircleList()
cll.append('a')
cll.append('b')
cll.append('c')

console.log(cll.toString())





