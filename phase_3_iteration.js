Array.prototype.bubbleSort = function() {
  let unsorted = true;
  let sortedArr = this;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] > sortedArr[i+1]) {
        let temp = sortedArr[i];
        sortedArr[i] = sortedArr[i+1];
        sortedArr[i+1] = temp;
        unsorted = true;
      }
    }
  }
  return sortedArr
}

String.prototype.substrings = function() {
  let substrings = [];
  
  for ( let i = 0; i < this.length; i++ ) {
    for ( let j = i + 1; j <= this.length; j++ ) {
      substrings.push(this.slice(i, j));
    }
  }

  return substrings;
}