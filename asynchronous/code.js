//synchronous javascript

console.log("Role 1")
console.log("Role 2")
console.log("Role 3")

//asynchronous javascript

function takeExam(role) {
    let time = Math.floor(Math.random() * 1000);
    console.log("time", time)
    setTimeout(function() {
        console.log(role + ' done!');
    }, time);
}

takeExam("Role 1")
takeExam("Role 2")
takeExam("Role 3")