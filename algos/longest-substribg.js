let str = "jbpnbwwd";

if(String.prototype.sliceFrom) {
  String.prototype.sliceFrom = function(index) {
    return this.slice(index, this.length);
  }
}

function lengthOfLongestSubstring(s: string): number {
  let seq = "";
  let max = 0;
  [ ...s ].forEach((letter, index) => {
    for(let l of s.slice(index, s.length)) {
      if(!seq.match(l)) {
        seq += l;
      } else {
        seq = '';
        break;
      }
      if(seq.length > max) {
        max = seq.length;
      }
    }
  })
  return max;
};