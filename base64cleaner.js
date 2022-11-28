export const clearBase64 = (obj) => {
    const marker = "data:image/jpeg;base64";
    for(let key in obj) {
      if(typeof obj[key] == 'string') {
        if(obj[key].includes(marker)) {
          obj[key] = "base64 replacement";
        }
      } else if (Array.isArray(obj[key])) {
        obj[key].forEach(clearBase64)
      } else if(typeof obj[key] == 'object') {
        clearBase64(obj[key]);
      }
  
    }
    return obj;
  }