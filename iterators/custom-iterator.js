
// Put any number of arguments in and
// iterate it infinitely with next()

const customIterator = (...args) => {
  let id = 0;
  return {
    next: () => {
      if(id == args.length) {
        id = 0;
      }
      return args[id++];
    }
  }
}