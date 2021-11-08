const greet = function() {
  return `Hello ${ this.name } ${ this.lastName }`;
}

this.name = "Ned";
this.lastName = "Stark";

const user = {
  name: "John",
  lastName: "Snow"
}

greet.apply(this);
greet.apply(user);