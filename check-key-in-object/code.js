const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in car); //true 
console.log('type' in car); //false


console.log(car.hasOwnProperty('make')) //true
console.log(car.hasOwnProperty('type')) //false