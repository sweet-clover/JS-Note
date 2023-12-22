function* fibonacci(num){
    let num1 = 0;
    let num2 = 1;
    for(let i = 0; i <= num; i++){
        yield num2;
        [num1,num2] = [num2, num1+num2];
    }
}

let fibo = fibonacci(5)
console.log(fibo.next()) //{ value: 1, done: false }
console.log(fibo.next()) //{ value: 1, done: false }
console.log(fibo.next()) //{ value: 2, done: false }
console.log(fibo.next()) //{ value: 3, done: false }
console.log(fibo.next()) //{ value: 5, done: false }
console.log(fibo.next()) //{ value: 8, done: false }
console.log(fibo.next()) //{ value: undefined, done: true }