// Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

'use strict';

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(insertItem, key) {
        // start at the head
        let currNode = this.head;
        
        while (key !== currNode.next.value) {
            currNode = currNode.next;
        }

        let findValue = this.find(key);

        // create the new node and set its value to the next list item
        currNode.next = new _Node(insertItem, findValue);
    }

    insertAfter(insertItem, key) {
        let findValue = this.find(key);
        let tempNext = findValue.next;

        // create the new node after the value
        findValue.next = new _Node(insertItem, tempNext);
    }

    insertAt(insertItem, position) {
        let currNode = this.head;
        let count = 0;

        // do this until you get to the end of the list
        while (currNode.next !== null) {
            count++;
            if (count === position) {
                this.insertBefore(insertItem, currNode.value);
            }
            currNode = currNode.next;
        }
    }

    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    // *** SOLUTION IS METHOD BELOW ***
    removeDuplicates() {
        // create a new node to track previous node
        let rootNode = new _Node(0);
        // assign this list's head as the next node from the new node
        rootNode.next = this.head;
        // we need to track the node and node value previous to the nodes we iterate through to find duplicates
        let currHead = rootNode;
        let currVal;
        while (currHead.next !== null) {
            if (currHead.next.value == currVal) {
                // if next value equal to current value, skip node to remove it
                currVal = currHead.next.value
                currHead.next = currHead.next.next
            } else {
                // if not, iterate to next node in linked list
                currVal = currHead.next.value;
                currHead = currHead.next;
            }
        }
        return rootNode.next;
    }
    // *** SOLUTION IS METHOD ABOVE ***
};

const display = list => {
    let currNode = list.head;
    let result = [];

    while (currNode !== null) {
        result.push(currNode.value);
        currNode = currNode.next;
    }
    
    return result;
};

const sortedLL = new LinkedList();
sortedLL.insertFirst(8);
sortedLL.insertFirst(7);
sortedLL.insertFirst(5);
sortedLL.insertFirst(5);
sortedLL.insertFirst(1);

console.log(display(sortedLL));

console.log(sortedLL.removeDuplicates());

console.log(display(sortedLL));