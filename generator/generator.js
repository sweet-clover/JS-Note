function* genFunc() {
    yield 3;
    yield 4;
}

let genObj = genFunc()
console.log(genObj.next()) // { value: 3, done: false }
console.log(genObj.next()) // { value: 4, done: false }
console.log(genObj.next()) // { value: undefined, done: true }