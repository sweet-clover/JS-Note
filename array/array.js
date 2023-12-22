let todo_list = [
    { "task": "HTML", "done": true },
    { "task": "CSS", "done": true },
    { "task": "Responsive design", "done": true },
    { "task": "Git", "done": true },
    { "task": "JavaScript", "done": true },
    { "task": "NodeJS", "done": false }
]

let mapList = todo_list.map((item) => {
    return {
        ...item,
        date: new Date()
    }
})

console.log(mapList)
// { task: 'Git', done: true, date: 2023-12-18T08:48:56.767Z }
// Every Obj ကို date property ထပ်ထည့်လိုက်လိုက်တာ


let filterList = todo_list.filter((item) => {
    return item.done
})

console.log(filterList)
// done true ဖြစ်တာ အားလုံးပေါင်း 5 ခုရှိတယ်
// done false ဖြစ်တာလိုချင်ရင်  

filterList = todo_list.filter((item) => {
    return !item.done
})

console.log(filterList)
// 1 တစ်ခုပဲရှိတယ်

let reduceList = todo_list.reduce((acc, currentValue) => {
    if(currentValue.done){
        acc['finished'].push(currentValue.task) // true ဖြစ်တဲ့ obj 
    }else{
        acc['unfinished'].push(currentValue.task) // false ဖြစ်တဲ့ obj 
    }
    return acc
}, {
    "finished": [],
    "unfinished": []
}) 

// {"finished": [], "unfinished": []} က initialValues
console.log(reduceList)
//{
//   finished: [ 'HTML', 'CSS', 'Responsive design', 'Git', 'JavaScript' ],
//   unfinished: [ 'NodeJS' ]
// }

let reduceLikeMap = todo_list.reduce((acc, current) => {
    acc.push({
        ...current,
        date: new Date()
    })
    return acc
},[])

console.log(reduceLikeMap)


let reduceLikeFilter = todo_list.reduce((acc, current) => {
    if(!current.done){
        acc.push({
            ...current,
            date: new Date()
        })
    }
    return acc
},[])

console.log(reduceLikeFilter)


let check = todo_list.every(item => item.done)
console.log(check) //false
// အကုန် true ဖြစ်မှ true

check = todo_list.every(item => !item.done)
console.log(check) //false
// အကုန် false ဖြစ်မှ true


let some_check = todo_list.some(item => item.done)
console.log(some_check) //true
// အကုန် false ဖြစ်မှ false


