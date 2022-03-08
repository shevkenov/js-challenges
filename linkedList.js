class LinkedList {
    constructor(){
        this.nodes = [];
    }

    get size(){
        return this.nodes.length
    }

    get head(){
        return this.size ? this.nodes[0] : null
    }

    get tail(){
        return this.size ? this.nodes[this.size - 1] : null
    }

    insertAt(index, value){
        const nextNode = this.nodes[index] || null;
        const previousNode = this.nodes[index - 1] || null;
        const node = {
            value,
            next: nextNode,
            previous: previousNode
        }

        if(nextNode) nextNode.previous = node;
        if(previousNode) previousNode.next = node;

        this.nodes.splice(index, 0, node);
    }

    insertFirst(value){
        this.insertAt(0, value)
    }

    insertLast(value){
        this.insertAt(this.size, value);
    }

    getAt(index){
        return this.nodes[index]
    }

    removeAt(index){
        const previousNode = this.getAt(--index);
        const nextNode = this.getAt(++index);

        if(previousNode) previousNode.next = nextNode;
        if(nextNode) nextNode.previous = previousNode;

        return this.nodes.splice(index, 1);
    }

    clear(){
        this.nodes = [];
    }

    reverse(){
        this.nodes = this.nodes.reduce((acc, cur) => {
            const firstNode = cur;
            const previousNode = firstNode.next;
            const nextNode = firstNode.previous;

            firstNode.next = nextNode;
            firstNode.previous = previousNode;

            return [firstNode, ...acc];
        },[])
    }
}

const myList = new LinkedList();
myList.insertFirst(1);
myList.insertFirst(2);
myList.insertFirst(3);
myList.insertLast(4);
//console.log(myList.size);
console.log(myList.head.value);
console.log(myList.tail.value);
console.log(myList.getAt(1));
console.log([...myList.nodes.map(({value}) => value)])
//console.log(myList.removeAt(1));
console.log(myList.reverse());
console.log(myList.head.value);
console.log(myList.tail.value);
console.log(myList.getAt(1));
console.log([...myList.nodes.map(({value}) => value)])
debugger