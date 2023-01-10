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