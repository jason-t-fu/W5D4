let arr = [1,2,3]

function callback(element) {
  console.log(element + "!")
}

Array.prototype.myEach = function(callback) {
  // const eachOutput = []

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }

  // return eachOutput;
}

Array.prototype.myMap = function(callback) {
  const eachOutput = []

  for (let i = 0; i < this.length; i++) {
    eachOutput.push(callback(this[i]));
  }

  return eachOutput;
}

Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator;
  if (initialValue) {
    accumulator = initialValue;
  }
  else {
    accumulator = this[0];
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
}