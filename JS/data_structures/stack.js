// Linked list implementation
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let nextNode = this.first;
			this.first = newNode;
			newNode.next = nextNode;
		}
		this.size++;
	}
	pop() {
		let poppedNode = this.first;
		if (!this.first) return null;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		this.size--;
		return poppedNode;
	}
}

stack = new Stack();
