Array.prototype.sameStructureAs = function (other) {
    if(this.length != other.length) return false;
    for(let i = 0; i < this.length; i++) {
      if(Array.isArray(this[i]) && Array.isArray(other[i])) {
        return this[i].sameStructureAs(other[i]);
      } else {
        if((Array.isArray(this[i]) && !Array.isArray(other[i])) 
          || (!Array.isArray(this[i]) && Array.isArray(other[i]))
          ) 
        {
          return false;
        }
      }
    }
    return true;
};