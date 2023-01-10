// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

const LEVEL_PROGRESS = 100;
const RANGE = [-8, 8];
const MAX_LEVEL = RANGE[1];
const MIN_LEVEL = RANGE[0];
class User {
  rank = -8;
  progress = 0;
  totalProgress = 0;
  levels = [];
  
  static createRange(range = RANGE) {
    let levels = [];
    for(let i = range[0]; i <= range[1]; i++) {
      if(i != 0) levels.push(i)
    }
    return levels;
  }
  constructor() {
    this.levels = User.createRange();
  }
  
  incProgress(kataKyu) {
    if(kataKyu > 8 || kataKyu < -8 || kataKyu == 0) throw new Error();
    this.totalProgress += this.calcProgress(kataKyu)
    this.rank = this.levels[Math.floor(this.totalProgress / LEVEL_PROGRESS)] || MAX_LEVEL;
    this.progress = this.totalProgress % LEVEL_PROGRESS;
    if(this.rank >= 8) {
      this.rank = 8;
      this.progress = 0;
    }
  };
  
  getInfo() {
    l("-- Info --");
    l("- Rank: ", this.rank);
    l("- Total progress: ", this.totalProgress);
    l("- Progress of current rank: ", this.progress);
  }
  
  getRank() {
    return this.rank;
  }
  
  calcProgress(kataKyu) {
    if(kataKyu < -8) return 0;
    const diff = this.levels.indexOf(kataKyu) - this.levels.indexOf(this.rank); 
    if(diff <= -2) return 0;
    if(diff == -1) return 1;
    if(diff == 0) return 3;
    return 10 * diff * diff;
  }
}