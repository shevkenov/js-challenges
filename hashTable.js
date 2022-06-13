class HashTable {
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.table.length;
    }

    set(key, value){
        const index = this._hash(key);
        if(this.table[index]){
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key){
                    this.table[index][i] = [key, value]
                    return
                }
            }
            this.table[index].push([key, value]);
        }else{
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        
        this.size++;
    }

    get(key){
        const index = this._hash(key);
        const arrayFound = this.table[index];
        if(arrayFound){
            for (let i = 0; i < arrayFound.length; i++) {
                arrayFound[i][0] === key;
                return arrayFound[i][1];
            }
        }
        
        return undefined;
    }

    remove(key){
        const index = this._hash(key);
        if(this.table[index] && this.table[index].length){
            for (let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i, 1);
                    this.size--;
                }
            }
            return true;
        }else{
            return false;
        }
    }

    display(){
        this.table.forEach((value, index) => {
            const intArray = value.map(([k,v]) => `[${k}, ${v}]`)

            console.log(`${index}, ${intArray}`)
        })
    }
}

const ht = new HashTable();
ht.set("Bulgaria", "Sofia");
ht.set("Italy", "Rome");
ht.set("Germany", "Berlin");

console.log(ht.get("Bulgaria")); //Sofia
console.log(ht.get("Germany")); //Berlin
console.log(ht.get("Italy")); //Rome

ht.remove("Italy");
console.log(ht.get("Italy")); //Rome
ht.display(); 
