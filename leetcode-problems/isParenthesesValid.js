function isValid(s: string): boolean {
  if(s.length == 1 || s.length == 0) return false;
  const obj = { "(": ")", "[": "]", "{": "}"};
  const [opens, closes] = [Object.keys(obj), Object.values(obj)];
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    let par = s[i];
    if(opens.includes(par)) {
      stack.push(par)
    } else {
      if(!stack.length) {
        return false;
      } 
      if(obj[stack[stack.length - 1]] != par) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return !stack.length;
};