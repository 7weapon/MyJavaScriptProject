class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // 哨兵节点
        this.head = new Node('head');
    }

    findByValue(val) {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.element !== val) {
            currentNode = currentNode.next;
        }
        return currentNode === null ? -1 : currentNode;
    }

    findByIndex(idx) {
        let currentNode = this.head;
        let pos = 0;
        while (currentNode !== null && pos !== idx) {
            currentNode = currentNode.next;
            pos++;
        }
        return currentNode === null ? -1 : currentNode;
    }

    insertNode(newEl, el) {
        const currentNode = this.findByValue(el);
        if (currentNode === -1) {
            console.error('未找到插入节点位置');
            return;
        }
        const newNode = new Node(newEl);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    findPrev(item) {
        let currentNode = this.head;
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }
        if (currentNode.next === null) {
            return -1;
        }
        return currentNode;
    }

    remove(item) {
        const delNode = this.findByValue(item);
        if (delNode) {
            const prevNode = this.findPrev(item);
            prevNode.next = delNode.next;
        }
    }

    // 环验证
    checkCircle() {
        let fast = this.head.next;
        let slow = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) {
                return true;
            }
        }
        return false;
    }

    // 遍历展示全部节点
    display() {
        if (this.checkCircle()) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            console.log(`当前节点：${ currentNode.element }`);
            currentNode = currentNode.next;
        }

    }

    reverseList() {
        const root = new Node('head');
        let currentNode = this.head.next;
        while (currentNode) {
            const next = currentNode.next;
            currentNode.next = root.next;  // 翻转
            root.next = currentNode;
            currentNode = next;
        }
    }
}
