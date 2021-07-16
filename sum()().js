function genSum() {
  let sum = 0;
  const logger = e => console.log(e)
  const add = e => sum += e;
  const gen = e => {
    add(e);
    logger(sum);
    return gen;
  }
  return gen;
}

let sum = genSum();

sum(1)(2)(4)(6)(10);
