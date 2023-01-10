const fs = require("fs");
const { Transform } = require("stream");

const toUpper = new Transform({
  transform: function(buf, enc, next) {
    next(null, buf.toString().toUpperCase());
  }
})

fs.createReadStream(process.argv[2])
  .pipe(toUpper)
  .pipe(process.stdout);