const permutations = (str) => {
  return str.length <= 1 
    ? [str]
    : str.split('')
      .map((char, i) => perm(str.replace(char, '')).map((k) => char + k))
      .reduce((r, x) => r.concat(x), [])
}