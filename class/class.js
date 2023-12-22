class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color
    }
    
    canPlay(){
        if(this.type === "dog"){
            return true
        }
        return false
    }
}

// Method ကို Class ထဲ ထပ်ထည့်လိုက်တာ
Animal.prototype.getDetails = function(){
    return `${this.type} => ${this.name} => ${this.color}`
}

var dog = new Animal("Lone Lone", "dog", "white")
console.log(dog) // { name: 'Lone Lone', type: 'dog', color: 'white', canPlay: [λ] }
console.log(dog.canPlay()) // true
console.log(dog.getDetails()) //'dog => Lone Lone => white' 

var fish = new Animal("Nemo", "fish", "red")
console.log(fish) // { name: 'Nemo', type: 'fish', color: 'red', canPlay: [λ] }
console.log(fish.canPlay()) // false
console.log(fish.getDetails()) // 'fish => Nemo => red' 

let values = [1,2,4,5,6]
let arr = values.splice(1,0,2)
console.log(arr)