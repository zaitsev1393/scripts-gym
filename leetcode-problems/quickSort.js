const qs = (arr, lo, hi) => {
  quickSort(arr, lo, hi);
}

const quickSort = (arr, lo, hi) => {
  if(lo >= hi) return;
  
  const pivotIdx = partition(arr, lo, hi);
  
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

const partition = (arr, lo, hi) => {
  let pivot = arr[hi];
  let idx = lo - 1;
  for(let i = lo; i < hi; ++i) {
    if(arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  
  return idx;
}