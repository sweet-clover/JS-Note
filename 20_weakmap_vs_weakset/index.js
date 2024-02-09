const x = 3; 
let y = 2; 
function update(arg) { 
    return Math.random() + y * arg; 
} 

console.log("start")
for(let i = 0; i < 100000000; i++){
    const result = update(3);
    if(result < 6 || result > 7){
        console.log("result", result)
    }
}
console.log("end")