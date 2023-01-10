function topKFrequent(nums: number[], k: number): number[] {
  let acc = {};
  for(let i = 0; i < nums.length; i++) {
    if(!acc[nums[i]]) {
      acc[nums[i]] = 1;
    } else {
      acc[nums[i]]++;
    }
  }
  let sorted = Object.entries(acc).sort((a, b) => +b[1] - +a[1]);
  return sorted.splice(0, k).map(([k, v]) => +k);
};