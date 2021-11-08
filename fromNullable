let str = "   _backend_even  T ";
let v = str;


const slice = x => x.slice(1);
const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f()
})

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x)
})

const fromNullable = x => x == null ? Left(x) : Right(x)

str = fromNullable(v)
      .map(v => v.trim())
      .map(v => v.toLowerCase())
      .map(v => v.replace(/ /g,''))
      .fold(() => '', v => v)