// Undirected Graph

class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(val) {
		if (!this.adjacencyList[val]) this.adjacencyList[val] = [];
	}
	addEdge(v1, v2) {
		if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
		if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
	}
	removeVertex(v) {
		while (this.adjacencyList[v].length) {
			const adjacentVertex = this.adjacencyList[v].pop();
			this.removeEdge(v, adjacentVertex);
		}
		delete this.adjacencyList[v];
	}
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
	}
	DFSRecursive(start) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		const DFSHelper = (vertex) => {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					return DFSHelper(neighbor);
				}
			});
		};
		DFSHelper(start);
		return result;
	}
	DFSIterative(start) {
		const s = [ start ];
		const result = [];
		const visited = {};

		visited[start] = true;
		while (s.length) {
			let current = s.pop();
			result.push(current);

			this.adjacencyList[current].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					s.push(neighbor);
				}
			});
		}
		return result;
	}
	BFS(start) {
		const queue = [ start ];
		const result = [];
		const visited = {};
		let current;
		visited[start] = true;

		while (queue.length) {
			current = queue.shift();
			result.push(current);

			this.adjacencyList[current].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('Wellington');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Tokyo', 'Wellington');
g.addEdge('Aspen', 'Dallas');
g.addEdge('Wellington', 'Dallas');
console.log(g);
// console.log(g.DFSRecursive('Tokyo'));
// console.log(g.DFSIterative('Tokyo'));
console.log(g.BFS('Tokyo'));
