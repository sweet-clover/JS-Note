function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    for(let i = 0; i < num; i++){
        console.log(num2)
        sum = num1 +  num2
        num1 = num2
        num2 = sum
    }
}
fibonacci(5)
//console.log မှာ 1, 1, 2, 3, 5