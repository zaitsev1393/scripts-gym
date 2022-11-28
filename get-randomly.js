const getRandomly = (variants) => {
  if(!Array.isArray(variants) || !variants.length || !variants)
    throw new Error("Expects array of elements to get randomly");
  
  const n = Math.floor(Math.random() * variants.length);

  return variants[n];
}
