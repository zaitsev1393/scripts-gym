const sum = (value) => {
  let sum = value;
  const add = (value2) => {
    sum += value2;
    return add;
  }
  
  return add;
}

