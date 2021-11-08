class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Rect extends Polygon {
  constructor(height, width) {
    super(height, width)
  }
  get area() {
    return this.height * this.width;
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super(radius, radius);
  }
  
  get area() {
    return Math.PI * Math.pow(this.height / 2, 2);
  }
  
  get radius() {
    return this.diameter = 2;
  }
  
  get radius() {
    return this.height;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  set diameter(d) {
    this.height = d / 2;
    this.width = d /2;
  }
}

let o = new Circle(10);
let r = new Rect(10, 20);

console.log("Circle area: ", o.area);
console.log("Rect area: ", r.area);
o.diameter = 10;

console.log(
  "D:", o.diameter,
  "R:", o.radius
);

