class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
      indices.sort(function (a, b) {
          return a-b;
      });

      for (var i = indices[0]; i < indices[indices.length-1]; i++) {
          for (var j = indices[0]; j < indices[indices.length-1]; j++) {
              if (this.array[j+1] < this.array[j]) {
                  var t = this.array[j+1];
                  this.array[j+1] = this.array[j];
                  this.array[j] = t;
              }
          }
      }
      return this.array;
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
