const times = (x, fn) => {
  for(let i = 0; i < x; i++) {
    fn();
  }
}