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
g.removeVertex('Tokyo');
