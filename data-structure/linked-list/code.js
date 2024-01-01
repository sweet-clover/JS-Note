class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    is_empty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.is_empty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
}

let list = new LinkedList()
list.prepend("D")
list.prepend("C")
list.prepend("B")
list.prepend("A")

console.log(list.head)
console.log(list.size)

