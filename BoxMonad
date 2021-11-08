

const Right = x => ({
  map: f => Right(f(x)),
  fold: () => x,
  toString: () => `Right(${ x })`,
  valueOf: () => x
})

const Left = x => ({
  map: f => Left(x),
  fold: () => 'Is null',
  toString: () => `Left(${ x })`,
  valueOf: () => x,
})


const fromNullable = x => {
  return x == null ? Left(x) : Right(x)
}

const Box = x => ({
  [Symbol.iterator]: function* () {
    yield x;
  },
  map: f => Box(f(x)),
  fold: () => x,
  valueOf: () => x,
  toString: () => `Result: ${ x }`
})

const arr = [ 1, 2, ...Box(3) ]