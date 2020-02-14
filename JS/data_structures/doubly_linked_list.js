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
	set(index, val) {
		let targetNode = this.get(index);
		if (targetNode) {
			targetNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) {
			this.unshift(val);
		} else if (index === this.length) {
			this.push(val);
		} else {
			let newNode = new Node(val);
			let targetNode = this.get(index - 1);
			newNode.next = targetNode.next;
			newNode.prev = targetNode;
			targetNode.next = newNode;
			newNode.next.prev = newNode;
		}
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		let targetNode = this.get(index);
		targetNode.prev.next = targetNode.next;
		targetNode.next.prev = targetNode.prev;
		targetNode.next = null;
		targetNode.prev = null;
		this.length--;
		return targetNode;
	}
}

list = new DoublyLinkedList();

list.push('A');
list.push('B');
list.push('C');
list.push('D');
console.log(list.get(2));
list.insert(2, 'INSERT');
console.log(list.get(2));
console.log(list.remove(2));
