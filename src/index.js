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
      var sor = [];
      var defaultComporator = (left, right) => left - right;
      if (this.comparator === undefined) {
          this.comparator = defaultComporator;
      }

      indices.sort(defaultComporator);
      
      for (var i = 0; i < indices.length; i++) {
          sor.push(this.array[indices[i]]);
      }

      sor.sort(this.comparator);

      for (var i = 0; i < indices.length; i++) {
          this.array.splice(indices[i], 1, sor[i]);
      }

      // for (var i = indices[0]; i < indices[indices.length-1]; i++) {
      //     for (var j = indices[0]; j < indices[indices.length-1]; j++) {
      //         if (this.array[j+1] < this.array[j]) {
      //             var t = this.array[j+1];
      //             this.array[j+1] = this.array[j];
      //             this.array[j] = t;
      //         }
      //     }
      // }

      return this.array;
  }

  setComparator(compareFunction) {
      this.comparator = compareFunction;
  }
}

module.exports = Sorter;
