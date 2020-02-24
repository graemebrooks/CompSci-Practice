class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(val) {
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while (true) {
				if (val === current.val) return undefined;
				if (val < current.val) {
					if (!current.left) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else if (val > current.val) {
					if (!current.right) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
	find(val) {
		if (!this.root) return false;
		let current = this.root;
		let found = false;
		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return false;
		return current;
	}
	BFS() {
		let data = [];
		let queue = [];
		let node = this.root;
		queue.push(this.root);
		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}
	DFSPreOrder() {
		let data = [];
		let current = this.root;
		let traverse = (node) => {
			data.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(current);
		return data;
	}
	DFSPostOrder() {
		let data = [];
		let current = this.root;
		let traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.val);
		};
		traverse(current);
		return data;
	}
	DFSInOrder() {
		let data = [];
		let current = this.root;
		let traverse = (node) => {
			if (node.left) traverse(node.left);
			data.push(node.val);
			if (node.right) traverse(node.right);
		};
		traverse(current);
		return data;
	}
}

let tree = new BST();
