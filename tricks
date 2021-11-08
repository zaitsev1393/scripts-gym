// -----------------------------------------------
// -------------------- Curry --------------------
// -----------------------------------------------
const curry = f => x => y => f(x, y);
const LOGGER = console.log; // <- next time it can be "console.info / console.error etc."

const messageHandler = (logger, message) => logger(message);
const setLogger = curry(messageHandler);
const log = setLogger(LOGGER);

log("Hello world!"); 
// -----------------------------------------------
// now in the entire app we have one source of 
// "logger" and we can define it with env variable 
// or some constant  or whatever and control on 
// the app boot, let's say
// -----------------------------------------------


// -----------------------------------------------
// -------------- Infinite curry -----------------
// -----------------------------------------------
const _curry = fn => {
  function inner(N, args) {
    return (...x) => {
      if(N <= x.length) {
        return fn(...args, ...x);
      }
      return inner(N - x.length, [...args, ...x])
    }
  }
  return inner(fn.length, [])
}

const add3 = (a, b, c) => a + b + c;
const add4 = (a, b, c, d) => a + b + c + d;

let sum = _curry(add4);

sum(2,2,2,3);
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------



// -----------------------------------------------
// ----------- Another curry example -------------
// -----------------------------------------------
const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
}
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------


// -----------------------------------------------
// ------------------ Custom pipe ----------------
// -----------------------------------------------

// -------- helpers --------
const g = x => x + 1;
const f = x => x * 2;
// -------------------------

const pipe = (...fns) => x => fns.reduce((y, fn) => fn(y), x);
const doStuff = pipe(
  g,
  trace('afterG'),
  f,
  trace('afterF')
)

doStuff(20);
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------



// -----------------------------------------------
// ------------ Interesting stuff ----------------
// -----------------------------------------------

JSON.parse(`{
  "name": 42,
  "__test": 3.14
}`, (key, value) => {
  if(key.startsWith("__")) {
    return undefined;
  }
  return value;
})

// -----------------------------------------------

let o = {
  name: 'John'
}

const key = 'lastName';
o = {
  ...o,
  ...{
    [ key ]: "Snow" 
  }
}

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------


