class Graph{
    constructor(directed = true){
        this.nodes = [];
        this.edges = new Map();
        this.directed = directed;
    }

    addNode(key, value = key){
        this.nodes.push({key, value});
    }

    removeNode(key){
        this.nodes = this.nodes.filter(n => n.key !== key);
        [...this.edges.values()].map(({a,b}) => {
            if(a === key || b === key){
                this.edges.delete(JSON.stringify([a,b]))
            }
        })
    }

    addEdge(a, b){
        this.edges.set(JSON.stringify([a,b]), {a,b});
    }

    removeEdge(a, b){
        this.edges.delete(JSON.stringify([a,b]));
        if(!this.directed) this.edges.delete(JSON.stringify([b,a]))
    }

    findNode(key){
        return this.nodes.find(n => n.key === key );
    }

    hasEdge(a, b){
        return this.edges.has(JSON.stringify([a,b]));
    }

    adjacent(key){
        return [...this.edges.values()].reduce((acc, {a,b}) => {
            if(a === key) acc.push(b);
            return acc
        },[])
    }

    indegree(key){
        return [...this.edges.values()].reduce((acc, {a,b}) => {
            if(b === key) acc++
            return acc
        }, 0)
    }

    outdegree(key){
        return [...this.edges.values()].reduce((acc, {a,b}) => {
            if(a === key) acc++
            return acc
        }, 0)
    }
}

const g = new Graph();
g.addNode('a');
g.addNode('b');
g.addNode('c');
g.addNode('d');

g.addEdge('a', 'c');
g.addEdge('b', 'c');
g.addEdge('c', 'b');
g.addEdge('d', 'a');

console.log(g.nodes.map(({value}) => value));
console.log([...g.edges.values()].map(({a,b}) => `${a} => ${b}`));
console.log(g.adjacent('c'));
console.log(g.indegree('c'));
console.log(g.outdegree('a'));

g.removeNode('c');
console.log(g.nodes.map(({value}) => value));
console.log([...g.edges.values()].map(({a,b}) => `${a} => ${b}`));