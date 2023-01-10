const bs = (v, arr) => {
  let lo = 0;
  let hi = arr.length - 1;
  let e, m;
  while(lo <= hi) {
    m = Math.floor((lo + hi) / 2);
    e = arr[m];
    if(v === e) {
      return m;
    } else {
      if(v > e) {
        lo = m + 1;
      } else {
        hi = m;
      }
    }
  }
}