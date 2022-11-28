const sum = (e1) => {
  let s = 0;
  s += e1;
  const add = (e2) => {
    s += e2;
    console.log("Sum: ", s);
    return add;
  }
  
  return add;
}

console.log(sum(1)(2)(5)(5));