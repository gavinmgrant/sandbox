// Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings, 
// i.e., it returns 0 if both strings are the same, 1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.
// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
// - Output: `1`

// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
// - Output: `-1`

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
        let currNode = this.head;
        
        while (key !== currNode.next.value) {
            currNode = currNode.next;
        }

        let findValue = this.find(key);

        currNode.next = new _Node(insertItem, findValue);
    }

    insertAfter(insertItem, key) {
        let findValue = this.find(key);
        let tempNext = findValue.next;

        findValue.next = new _Node(insertItem, tempNext);
    }

    insertAt(insertItem, position) {
        let currNode = this.head;
        let count = 0;

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

const listA = new LinkedList();
const listB = new LinkedList();

listA.insertLast("B");
listA.insertLast("i");
listA.insertLast("l");
listA.insertLast("b");
listA.insertLast("o");
listA.insertLast("a");

listB.insertLast("B");
listB.insertLast("i");
listB.insertLast("l");
listB.insertLast("b");
listB.insertLast("o");
listB.insertLast("b");

// console.log(display(listA), display(listB));

// *** SOLUTION ***
const compareStringValues = (list1, list2) => {
    // establish the node heads for both linked lists
    let currNodeA = list1.head;
    let currNodeB = list2.head;

    // iterate through both lists while each node it truthy
    while (currNodeA || currNodeB) {
        // if you get to a point where one node is falsy, the node doesn't exist and return 1
        if (!currNodeA || !currNodeB) {
            return 1;
        }
        // if the values differ, return -1
        if (currNodeA.value !== currNodeB.value) {
            return -1;
        }
        // assign the next nodes as the current nodes to iterate to the next node in the list
        currNodeA = currNodeA.next;
        currNodeB = currNodeB.next;
    }
    // if the above if statements are not true, then that means the lists match
    return 0;
}

console.log(compareStringValues(listA, listB));