class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    is_empty() {
        return this.size === 0
    }

    prepend(value) {
        let node = new Node(value)
        if (this.is_empty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if (this.is_empty()) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insert(position, value) {
        if (position < 0 || position > this.size) {
            return false
        }

        if (position === 0) {
            return this.prepend(value)
        } else {
            let node = new Node(value)
            let current = this.head;
            let prev = null
            let i = 0;
            while (i < position) {
                prev = current
                current = current.next
                i++
            }
            node.next = current
            prev.next = node
            this.size++
        }
    }

    index_of(element){
        let current = this.head
        let i = 0
        while(current){
            if(current.value === element){
                return i
            }
            i++
            current = current.next
        }
        return -1
    }

    print(){
        let current = this.head
        let str = ''
        while(current){
            str += current.value + ' ' 
            current = current.next
        }
        return str
    }
}

let list = new LinkedList()
// list.prepend("D")
// list.prepend("C")
// list.prepend("B")
// list.prepend("A")
list.append("A")
list.append("B")
list.append("E")
console.log(list.insert(2, "C"))
console.log(list.head)
console.log(list.index_of('D'))
console.log(list.print())