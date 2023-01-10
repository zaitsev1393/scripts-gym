function longestCommonPrefix(strs: string[]): string {
  let prefix = '';
  let counter = 0;
  while(true) {
    const letter = strs[0][counter];
    console.log("letter: ", letter);
    if(strs.every(str => str[counter] === letter)) {
      prefix += letter;
      counter++;
    } else {
      return prefix;
    }
  }
};