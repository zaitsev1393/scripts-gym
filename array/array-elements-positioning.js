const positions = ["LEFT", "RIGHT", "LEFT"];
const limit = 16;
const words = [
  [ "Hello", "world" ],
  [ "Brad", "came", "to", "dinner", "with", "us" ],
  [ "He", "loves", "tacos" ],
];

const formatWords = (words, limit, positions) => {
  if(words.length != positions.length) {
    throw new Error("Valuees and Positioning mistmatch");
  }
  
  const posHelpers = {
    LEFT: string => `*${ string }${ " ".repeat(limit - string.length) }*`,
    RIGHT: string => `*${ " ".repeat(limit - string.length) }${ string }*`
  }
  
  words = words.map(row => {
    let buffer = Array.from(row);
    return row.reduce((acc, el) => {
      let word = buffer.shift();
      let testerArray;
      if(acc.length) {
        testerArray = Array.from(acc[acc.length - 1])
        testerArray.push(word);
      }
      
      if(!acc.length || testerArray.join(' ').length >= limit) {
        acc.push([]);
      }
      
      acc[acc.length - 1].push(word);

      return acc;
    }, [])
  });
  
  words = words
    .map((phrase, phraseIndex) => 
      phrase
        .map(words => {
          const alignment = positions[phraseIndex];
          const string = words.join(' ');
          return posHelpers[alignment](string);
        }));
  

  const wrap = (array, symbol = "*") => {
    array.unshift(symbol.repeat(limit + 2));
    array.push(symbol.repeat(limit + 2));
    return array;
  }
  
  return wrap(words);
}

let finalArray = formatWords(words, limit, positions);
console.log("Array: ", finalArray);
console.log(`Stringified: \n ${ finalArray.flat().join("\n") }`);

