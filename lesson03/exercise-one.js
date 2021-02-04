let arr = ['red', 'blue', 'black', 'pink', 'yellow'];

console.log("1", arr);

arr.push('green');

console.log("2", arr);

arr.splice(2, 1);

console.log("3", arr);

let string = arr.join();

console.log(string);