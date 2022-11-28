const getRandomly = (variants) => {
  if(!Array.isArray(variants) || !variants.length || !variants)
    throw new Error("Expects array of elements to get randomly");
  
  const n = Math.floor(Math.random() * variants.length);

  return variants[n];
}

for(let i = 0; i < 10000; i++) {
  getRandomly(['Harder', 'Better', 'Faster', 'Stronger']);
}

getRandomly(['Harder', 'Better', 'Faster', 'Stronger']);

2 + 5
