const { createHash } = require("crypto");

const hash = input => createHash("sha256").update(input).digest("hex");

console.log("Hash: ", hash("Larry"));