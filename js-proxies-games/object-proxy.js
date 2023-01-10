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
    
    if(!(prop in target)) {
      target[prop] = prop;
    }
    return target[prop];
  }
};

let proxy = new Proxy(obj, handler);

proxy
