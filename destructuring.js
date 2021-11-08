// Destructuring

// Rest
const data1 = { name: "John", surname: "Snow", status: "Bastard" };
const { status, ...rest } = data1;

console.log(rest);

// Rename
const data2 = { n: "Bob", a: 44 }
const { n: name, a: age } = data2;

console.log(name, age);

// Nested

const data3 = { country: { title: "Westeros", population: 20000000 } }
const { country: { title, population }} = data3;

console.log(title, population);