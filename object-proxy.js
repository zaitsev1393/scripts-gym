let obj = {
  name: "John Snow",
  age: 25
}

const handler = {
  get: function(target, prop, receiver) {
    console.log({
      target,
      prop,
      receiver
    });
    console.log('is in? ', prop in target);
    
    if(!(prop in target)) {
      target[prop] = prop;
    }
    return target[prop];
  }
};

let proxy = new Proxy(obj, handler);

proxy.hello

const log = (...args) => {
  console.log(args);
}

const o = {
  get prop() {

  }
}
