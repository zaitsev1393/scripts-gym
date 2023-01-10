let a = [
  [1,2,3,4],
  [5,6,7,8]
]

const draw = (array) => {
  let str = "";
  for(let i = 0; i < array.length; i++) {
    str += "\n";
    for(let j = 0; j < array[i].length; j++) {
      str += ` ${ array[i][j] }`;
    }
  }
  str += "\n";
  return str;
}

const reflect = (arr) => {
  const rows = arr.length;
  const cols = arr[0].length;
  if(rows < cols) {
    for(let x = cols; x > rows; x--) {
      array.push()
    }
  }
}

draw(a);