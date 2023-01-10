const observeVariables = callbacks => {
  const vars = Object.keys(callbacks);

  const handler = {
    set: (target, prop, value, receiver) => {
      target[prop] = value;
      if(vars.includes(prop)) {
        callbacks[prop]();
      }
      return true;
    }
  }
  
  return new Proxy({}, handler);
}

const ctx = observeVariables({
  state: () => console.log('state changed!'),
  price: () => console.log('price changed!')
});

ctx.state = 'lol';
ctx.price = 'kek';
ctx.test = 42;


