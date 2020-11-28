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
        // this head is assigned the new node and the previous head is set as next node
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        // if there is no head, then the list is empty and the last is the first
        if (this.head === null) {
            this.insertFirst(item);
        }
        // iterate through the list until the node's next is null, that's the last node, then make the new node
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    remove(item) {
        // if there is no head, the list is empty
        if (!this.head) {
            return null;
        }
        // if the head value equals item, remove the head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // track the current and previousNodes starting at the head
        let currNode = this.head;
        let previousNode = this.head;
        // while there is a node and its value isn't equal to item
        while ((currNode !== null) && (currNode.value !== item)) {
            // iterate through the list
            previousNode = currNode;
            currNode = currNode.next;
        }
        // if currNode doesn't find item, the item doesn't exist and end the function
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        // set the previous next to the node after the node to be deleted
        previousNode.next = currNode.next;
    }

    find(item) {
        let currNode = this.head;
        // there is no head, the list is empty
        if (!this.head) {
            return null;
        }
        // iterate through the list while the current node's value doesn't equal item
        while (currNode.value !== item) {
            // if you get to the end of the list, there are no matches
            if (currNode.next === null) {
                return null;
            }
            // or else keep going to the next node
            else {
                currNode = currNode.next;
            }
        }
        // if you get here then a match was found between current node value and item
        return currNode;
    }
};