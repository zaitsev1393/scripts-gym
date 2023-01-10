let obj = {
  name: 'John',
  surname: 'Wick',
  address: {
    country: "USA",
    city: "New York",
    post_code: "000000"
  },
  weapons: [
    {
      name: "Colt",
      type: "pistol",
      ammo: "45"
    },
    {
      name: "AK-47",
      type: "semi-auto",
      ammo: "49"
    },
    {
      name: "m16",
      type: "semi-auto",
      ammo: ['11','14'],
      materials: {
        iron: true
      }
    }
  ],
  animals: ["dead_dog", "alive_dog"]
};

let tribe = {
    users: [
      { picture: 123 },
      { picture: 'default2'},
      { picture: './assets/img/pixel-img.png' }
    ],
    searching: true
  };

function deepClone(object) {
  if (!object) return;
  let clone = {};
  for (let key in object) {
    if(object[key].constructor === String || object[key].constructor === Number) {
      clone[key] = object[key];
    }
    if(object[key].constructor === Array) {
      clone[key] = Array.from(object[key]);
    }
    if(object[key].constructor === Object) {
      clone[key] = deepClone(object[key]);
    }
  }
  return clone;
}

let b = deepClone(tribe);

console.log(tribe);
b.users[2].picture = 'lol';
console.log(b);
