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
}

let tree = new BST();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(2));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.find(5));
console.log(tree.find(71));
