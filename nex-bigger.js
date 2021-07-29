// function nextBigger(n){
//   let bigger = null;
//   let digits = n.toString().split('');
//   let last = digits[digits.length - 1];
//   let preLast = digits[digits.length - 2];
//   digits[digits.length - 2] = last;
//   digits[digits.length - 1] = preLast;
//   console.log(digits);
//   let newN = +digits.join('');
//   if(newN > n) {
//     bigger = newN;
//   }
//   return bigger;
// }

// nextBigger(414);

const nextBigger = n => {
  const d = n.toString().split('');
  const len = d.length;
  let newN = null;
  for(let i = len - 1; i >= 0; i--) {
    let bufD = d;
    let buf = bufD[i];
    bufD[i] = bufD[i - 1];
    bufD[i - 1] = buf;
    if(+bufD.join('') > n) {
      newN = +bufD.join('');  
      break;
    }
    
  }
  return newN;
}

nextBigger(63778);