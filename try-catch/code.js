// try{
//     let amount = '100'
//     console.log()
// }
// catch(error){
//     console.log("error", error)
// }
// finally{
//     console.log("welcome")
// }

new Promise((resolve, reject) => {
    let amount = '100'
    if(typeof amount === 'number'){
        resolve(amount.toFixed(2))
    }else{
        reject("Error: TypeError, amount should be number!")
    }
})
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => console.log("welcome"))