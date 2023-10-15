// It is a dynamically typed language

// variable declaration

var a = 10;

// let and const are introduced in ES6
// let can't be redeclared
let b = 12;

// const can't be reassignes as well as redeclared
const c = 20;

// Conditional statment

if (a < b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

// Ternary statement
console.log(c > b ? "c is greater than b" : "b is greater than c");

// Looping statement

for (let index = 0; index < 4; index++) {
  console.log("Hello");
}

let i = 0;
while (i < 3) {
  console.log("world");
  i += 1;
}

// Array

const names = ["sathish", "ammu", "kaarthika", "moii"];
// Where in will return the index of the every array element , of will return the elements itself
for (let name in names) {
  console.log(name);
}

// Functions

// It is a normal function in javascript
function add1() {
  console.log(1 + 1);
}

// Arrow function in javascript

const add2 = () => {
  console.log(1 + 1);
};

add1();
add2();
