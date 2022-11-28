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
  const { rows, cols } = getLengths(arr);
  if(rows < cols) {
    for(let x = rows; x > 0; x--) {
      arr.push([...arr[x - 1]]);
    }
  }
  return arr;
}

const getLengths = (arr) => ({ rows: arr.length, cols: arr[0].length });

a = reflect(a);

const turn = (arr) => {
  const { rows, cols } = getLengths(arr);
  if(rows != cols) throw new Error("Not a matrix");
  for(let i = 0; i < rows; i++) {
    for(let j = i; j < cols; j++) {
      let buff = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = buff;
    }
  }

  return arr;
}


turn(a);