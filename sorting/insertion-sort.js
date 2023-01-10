Array.prototype.insertionSort = function() {
    for(let j = 1; j < this.length; j++) {
        let key = this[j];
        let i = j - 1;
        while(i >= 0 && this[i] > key) {
            this[i + 1] = this[i];
            i = i - 1;
        }
        this[i + 1] = key;
    }
    return this;
}

let array = [];
for(let i = 0; i < 100000; i++) {
    array = [...array, Math.floor(Math.random() * 100)];
}

console.time('sort');
array.insertionSort();
console.timeEnd('sort');