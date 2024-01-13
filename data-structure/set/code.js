class Set{
    constructor(){
        this.items = {}
    }

    has(value){
        return this.items.hasOwnProperty(value)
    }

    add(value){
        if(!this.has(value)){
            this.items[value] = value
            return true
        }else{
            return false
        }
    }

    delete(value){
        if(this.has(value)){
            delete this.items[value]
            return true
        }else{
            return false
        }
    }

    clear(){
        this.items = {}
    }

    size(){
        return Object.keys(this.items).length
    }

    values(){
        return Object.values(this.items)
    }

    union(otherSet){
        let unionSet = new Set();
        let values = this.values()
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        values = otherSet.values()
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }

        return unionSet
    }

    intersection(otherSet){
        let intersectionSet = new Set();
        let values = this.values()
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet;
    }

    difference(otherSet){
        let differenceSet = new Set();
        let values = this.values()
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }

        return differenceSet;
    }
}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
console.log(setA.values())
let unionAB = setA.union(setB);
console.log(unionAB.values());

let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

let differenceAB = setA.difference(setB);
console.log(differenceAB.values());
