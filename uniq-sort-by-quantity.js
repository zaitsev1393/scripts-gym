let words = [
  'banana',
  'grapefruit',
  'banana',
  'grapefruit',
  'orange',
  'banana'
]

const uniqSortByQnt = array => {
  let obj = {};
  array.forEach(e => {
    if(Object.keys(obj).includes(e)) {
      obj[e]++;
    } else {
      obj[e] = 0;
    }
  })
  return Object
      .entries(obj)
      .sort((a, b) => a[1] > b[1])
      .map(pair => pair[0]);
}

console.log(uniqSortByQnt( words ));