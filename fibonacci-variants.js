const createClassicFib = () => {
  let current = 0, next = 1;
  return () => {
    let temp = current;
    current = next;
    next = next + temp;
    return current;
  }
}

function * createGeneratorFib () {
  let c = 0, n = 1;
  while(true) {
    [c, n] = [n, c + n];
    yield c;
  }
}

const createOnelinerNormalFib = (c = 0, n = 1) => (t = c) => ([c, n] = [n, c + n])[0];

// const classicFib = createClassicFib();
// const generatorFib = createGeneratorFib();
// const onelinerFib = createOnelinerNormalFib();