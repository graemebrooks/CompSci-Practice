class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return currentHead;
	}
	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	set(index, value) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = value;
			return true;
		}
		return false;
	}
	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		let newNode = new Node(value);
		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let prev = this.get(index - 1);
		let removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}
	reverse() {
		let current = this.head;
		this.head = this.tail;
		this.tail = current;
		let prev = null;
		let next;
		for (let i = 0; i < this.length; i++) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		return this;
	}
	traverse() {
		let current = this.head;
		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}
}

let list = new SinglyLinkedList();
