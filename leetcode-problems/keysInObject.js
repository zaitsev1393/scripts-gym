let key = 'red.big.apple';
let obj = {
  red: {
    small: {},
    big: {
      apple: "APPLE"
    }
  }
}

const get = (seq, nested) => {
  const stack = seq.split('.');
  let level = nested[stack.shift()];
  while(stack.length) {
    let el = stack.shift();
    if(typeof nested[el] === 'object') {
      level = nested[el] 
    } else {
      return level[el];
    }
  }
}