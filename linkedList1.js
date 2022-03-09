class LinkedList {
    constructor(){
        this.nodes = [];
    }

    get size(){
        return this.nodes.length;
    }

    get head(){
        return this.nodes[0] || null;
    }

    get tail(){
        return this.nodes[this.size - 1] || null;
    }

    insertAt(index, value){
        const nextNode = this.nodes[index] || null;
        const previousNode = this.nodes[index - 1] || null;
        const node = {
            value,
            next: nextNode ? nextNode : null
        };
        
        if(previousNode) previousNode.next = node;

        this.nodes.splice(index, 0, node);
    }

    insertFirst(value){
        this.insertAt(0, value);
    }

    insertLast(value){
        this.insertAt(this.size, value)
    }

    getAt(index){
        return this.nodes[index] || null
    }

    clear(){
        this.nodes = [];
    }

    removeAt(index){
        const nextNode = this.nodes[index] || null;
        const previousNode = this.nodes[index - 1] || null;
        
        if(previousNode) previousNode.next = nextNode;

        this.nodes.splice(index, 1);
    }

    reverse(){
        this.nodes = this.nodes.reduce((acc, cur) => {
            const node = {
                value: cur.value,
                next: acc[0]
            }
            acc.unshift(node);
            return acc;
        }, [])
    }
}

const list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3, 5);
console.log(list.size);
console.log(list.head.value);
console.log(list.tail.value);
console.log(list.nodes.map(({value}) => value))
console.log(list.getAt(4))
list.reverse();
console.log(list.nodes.map(({value}) => value))
