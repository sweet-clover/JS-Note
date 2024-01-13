// function order(riderArrived){
//     console.log("Order processing begins ....")
//     setTimeout(riderArrived, 5000);
// }

// function riderArrived(){
//     console.log("Order processing end ....")
// } 

// function work() {
//     console.log("Working ....")
// }

// order(riderArrived)
// work()


// Order processing begins ....
// Working .... (5 seconds ကြာပြီးမှ next line ပေါ်လာမယ် )
// Order processing end ....


// const add = (a,b) => a+b
// const sub = (a,b) => a-b
// const calculate = (a,b,callback) => {
//     return callback(a, b)
// }
// console.log(calculate(20,10, add))
// console.log(calculate(20,10, sub))


function getOrder(callback){
    console.log("order => ")
    return callback()
}

function getProduct(product, callback){
    console.log("product  => ", product)
    return callback()
}

function getCategory(category, callback){
    console.log("category => ", category)
    return callback()
}


getOrder(() => { 
    getProduct("Coffee", () => {
        getCategory("Drink", () => {
            console.log("finished");
        });
    });
});