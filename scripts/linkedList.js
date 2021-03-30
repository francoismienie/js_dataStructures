import { Node } from "./node.js";

export function LinkedList() {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.AddHeadNode = function (value) {
    const node = new Node(value, this.head, null);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
    }
    else {
        node.prev = null;
        this.head.prev = node;
        this.head = node;

    }
};
LinkedList.prototype.AddTailNode = function (value) {
    const node = new Node(value, null, this.tail)
    if (this.tail === null) {
        this.head = node;
        this.tail = node;
    }
    else {
        this.tail.next = node;
        this.tail = node;
    }
};
LinkedList.prototype.RemoveHeadNode = function () {
    if (this.head === null)
        return;

    const nodeValue = this.head.value;
    this.head = this.head.next;
    if (this.head !== null) {
        this.head.prev.next = null;
        this.head.prev = null;
    }
    else {
        this.tail = null;
    }



    return nodeValue;
};
LinkedList.prototype.RemoveTailNode = function () {
    if (this.tail === null) return null;

    const nodeValue = this.tail.value;

    if (this.tail.prev !== null) {
        this.tail = this.tail.prev;
        this.tail.next.prev = null;
        this.tail.next = null;
    } else {
        this.head = null;
        this.tail = null;
    }

    return nodeValue;
}

LinkedList.prototype.search = function (value) {
    let currentNode = this.head;

    if (currentNode === null) return null;
    if (currentNode.value === value) return currentNode.value;

    while (currentNode !== null) {
        if (currentNode.value === value) return currentNode.value;

        currentNode = currentNode.next;
    }

    return null;
}