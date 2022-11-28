const log = (...args) => console.log(...args);

const Box = (value) =>
({
  print: () => `Result: ${ value }`,
  get: () => value,
  pipe: (...fns) => Box(fns.reduce((acc, fn) => fn(acc), value))
})

const res = Box(4)
  .pipe(
  	(v) => v + 2,
    (v) => v * 2
	)

// res.get();

const CreateAssembler = () => {
  let parts = {};
  return {
    add: (name) => {
      if(name in parts) {
        parts[name] += 1;
      } else {
        parts[name] = 1;
      }
    },
    showParts: () => parts
  }
}

const assembler = CreateAssembler();

assembler.add("iron ingot");
assembler.add("iron ingot");
assembler.add("copper ingot");

assembler.showParts();