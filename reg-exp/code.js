let globalRegex = new RegExp('^A', 'i');
console.log(globalRegex.test("ABC"));
console.log(globalRegex.test("abc"));
console.log(globalRegex.test("9bc"));


globalRegex = new RegExp('^A[0-9]$', 'i');
console.log(globalRegex.test("AB0")); // false
console.log(globalRegex.test("a9")); //true

globalRegex = /^A[0-9]$/i;
console.log(globalRegex.test("a9")); // true

globalRegex = /^\w{8}$/i;
console.log(globalRegex.test("abc12345")); 
console.log(globalRegex.test("abc123")); 
console.log(globalRegex.test("abc123456")); 

globalRegex = /^\w{8,}$/i;
console.log(globalRegex.test("abc123456"));

globalRegex = /^\w{8,}\.(com|org)$/i;
console.log(globalRegex.test("abc123456.com"));
console.log(globalRegex.test("abc123456.org"));
console.log(globalRegex.test("abc123456.dev"));


globalRegex = /A\d+/;
console.log(globalRegex.test('A8')); //true
console.log(globalRegex.test('A')); // false


globalRegex = /A\d*/;
console.log(globalRegex.test('A8')); //true
console.log(globalRegex.test('A'));

globalRegex = /.sion$/;
console.log(globalRegex.test('version')); //true

globalRegex = /June?/i
// e? (? က ပါလည်းရတယ် မပါလည်းရတယ် )
console.log(globalRegex.test("Jun"));
console.log(globalRegex.test("June"));

const checkString = "Last year 2022, I had 500$. In the year 2023, I had 1000$"

console.log(checkString.match(/\d+(?=\$)/gi)) // [500,100]

console.log(checkString.match(/\d+\b(?!\$)/gi)) // [500,100]

let todo_list = [
    { "task": "HTML", "done": true },
    { "task": "CSS", "done": true },
    { "task": "Responsive design", "done": true },
    { "task": "Git", "done": true },
    { "task": "JS", "done": true },
    { "task": "NodeJS", "done": false },
]

let list = todo_list.filter((item) => /JS$/gi.test(item.task))
// item 2 ခုရမယ် task name JS နဲ့ဆုံးတာ နှစ်ခုရှိတယ်

console.log("list", list)