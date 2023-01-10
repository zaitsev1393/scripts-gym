Array.prototype.populate = function(value, n) {
  times(n, () => this.push(value));
  return this;
}