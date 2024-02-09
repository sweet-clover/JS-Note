// let arr = [1,2,3,4,5]

// arr.map((v) => v * 2)

// console.log("arr", arr)

let arr = [{name: "Su Su"}, {name: "Hla Hla"}]

let arr2 = arr.filter((v) => v.name != "Su Su")

// console.log("arr", arr)
// console.log("arr2", arr2)

// let name = "Clover"
// let u_name = name.toUpperCase()
// console.log("name", u_name)
// console.log("name", name)

// let name = "Clover"
// name[0] ="c"
// console.log("name", name)

let a = 5;
let b = 10;
a = b
a++
console.log(a) //11
console.log(b) //10

// let clover = {
//     id: 1,
//     name: "Clover",
// }

// let new_obj = clover


let clover = {
    id: 1,
    name: "Clover",
}

// let new_obj = {...clover}
let new_obj = Object.assign({}, clover)
new_obj.name = "Testing"

console.log("clover", clover)
console.log("new_obj", new_obj)