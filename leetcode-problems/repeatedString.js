function repeatedString(s, n) {
  if(!s.match(/a/)) return 0;
  if(s.length == 1) return n;
  let acc = Math.floor(n / s.length) * s.match(/a/g).length;
  acc += (s.slice(0, n % s.length ).match(/a/g) || []).length;
  return acc;
}

