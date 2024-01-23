let student = { id: 1, name: "Aung Aung",age: 25 }
student.gender = "Male"
console.log("student", student)

// for(key in student){
//     console.log("key => ", key, ", value => ", student[key])
// }
const studentMap = new Map();

studentMap.set('id', 1);
studentMap.set('name', "Aung Aung");
studentMap.set('age', 25);
studentMap.set("gender", "Male");

studentMap.set('name', "Maung Maung");
studentMap.set({task: "testing"}, "Maung Maung");

//Map(3) { 'id' => 1, 'age' => 25, 'name' => 'Aung Aung' }
// studentMap.delete("gender"); // false

console.log("Map", studentMap.keys())
console.log("Map", Object.keys(student))

console.log(JSON.stringify(student))
console.log(JSON.stringify(studentMap))
// console.log(Object.keys(student).length)
// console.log(Array.from(studentMap))
// console.log(Array.from(student))
// for (const [key, value] of studentMap) {
//     console.log("key => ", key, ", value => ", value)
// }