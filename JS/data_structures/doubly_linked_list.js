class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail.next.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		let poppedNode = this.tail;
		if (!this.head) return undefined;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			poppedNode.prev = null;
			this.tail.next = null;
		}
		this.length--;
		return poppedNode;
	}
	shift() {
		if (!this.head) return undefined;
		let shiftedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = shiftedNode.next;
			this.head.prev = null;
			shiftedNode.next = null;
		}
		this.length--;
		return shiftedNode;
	}
	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		if (index <= this.length / 2) {
			let currentNode = this.head;
			for (let i = 0; i < index; i++) {
				currentNode = currentNode.next;
			}
			return currentNode;
		} else {
			let currentNode = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				currentNode = currentNode.prev;
			}
			return currentNode;
		}
	}
}

list = new DoublyLinkedList();

list.push('A');
console.log(list.tail);

console.log(list.push('B'));
console.log(list.push('C'));
console.log(list.unshift('Z'));
console.log(list.get(3));
