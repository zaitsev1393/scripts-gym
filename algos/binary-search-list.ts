export default function bs_list(haystack: number[], needle: number): boolean {
  if(haystack[0] > needle || haystack[haystack.length - 1] < needle) return false;

  let i = Math.ceil(haystack.length / 2);
  while(haystack[i] != needle) {
    console.log("loop start i: ", i);
    if(haystack[i] === needle) {
      return true;
    } else {
      if(haystack[i] > needle) {
        i -= Math.ceil(i / 2);
        console.log("needle is smaller: ", i);
      } else {
        i += Math.ceil(i / 2);
        console.log("needle is bigger: ", i);
      }
    }
  }
  return false;
}