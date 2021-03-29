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
    let tmpNode = this.head.next;
    tmpNode.prev = null;
    this.head.next = null;
    this.head = null;
    this.head = tmpNode;
    tmpNode = null
};
LinkedList.prototype.RemoveTailNode = function () {
    if (this.tail.prev === null) {
        this.tail = null;
        this.head = null;
        return;
    }

    let tmpNode = this.tail.prev;
    this.tail.prev = null;
    this.tail.next = null;
    tmpNode.next = null;
    this.tail = tmpNode;
    tmpNode = null;
}

LinkedList.prototype.findValue = function (value) {

}