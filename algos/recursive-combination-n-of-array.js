const combinate = (elem, array, length, combos) => {
  let base = '';
  for(let x = 0; x < array.length; x++) {
    base = elem;
    if(length == 1) {
      combos.push(base + array[x]);
    } else {
      base = base + array[x];
      combinate(base, array, length - 1, combos);
    }
  }
  return combos;
}
