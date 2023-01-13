const getHalfs = (n) => {
  const length = Math.ceil(Math.log10(n));
  const half = Math.ceil(length / 2 - length % 2);
  const str = String(n);
  return [str.slice(0, half), str.slice(-half)];
}

const reverseString = (str) => str.split('').reverse().join('');

const getBiggestPalyndrome = (high = 99999, low = 10000) => {
  for(let i = high; i >= low; i--) {
    for(let j = high; j >= low; j--) {
      const [left, right] = getHalfs(i * j);
      if(left == reverseString(right)) {
        return [i, j];
      }
    } 
  }
}