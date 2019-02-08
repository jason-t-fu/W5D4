
Array.prototype.uniq = function () {
  const uniqArr = [];

  this.forEach(function(element) {
    if (!uniqArr.includes(element)) {
      uniqArr.push(element);
    }
  });

  return uniqArr;
}

Array.prototype.twoSum = function () {
  const pairs = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

Array.prototype.transpose = function () {
  const transposed = new Array( this[0].length );

  for (let i = 0; i < transposed.length; i++) {
    transposed[i] = new Array( this.length );
  }

  for (let i = 0; i < this.length; i++) {
    for(let j = 0; j < this[i].length; j++) {
      transposed[j][i] = this[i][j];
    }
  }

  return transposed;
}