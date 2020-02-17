// Array implementation
let q = [];

// Enqueue
q.unshift('First');
q.unshift('Second');
q.unshift('Third');

// Dequeue
q.pop();
q.pop();
q.pop();

// Linked list implementation
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
	}
	dequeue() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.size === 1) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
}

q = new Queue();
