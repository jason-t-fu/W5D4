range = (start,end) => {
 if (start === end) { return [start]; }

 return [start].concat(range(start+1, end));
}

// def range(start, end)
//   return start if start == end

//   [start] + range(start+1, end)
// end

const sumRec = function(arr) {
  if (arr.length <= 1) {
    return arr[0];
  }
  debugger
  return arr.shift() + sumRec(arr)
}

exp1 = (base, exp) => {
  if (exp <= 0) {
    return 1
  }

  return base * exp1(base, exp-1)
}

exp2 = (base, exp) => {
  if (exp === 0) {
    return 1
  }
  if (exp === 1) {
    return base
  }
  if (exp % 2 === 0) {
    return exp2(base, exp/2)**2
  }
  else { return base * exp2(base, ((exp-1) / 2)**2) }
}

fibonasty = (n) => {
  debugger
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }
  
  let lastFib = fibonasty(n-1);
  return lastFib.concat(lastFib[lastFib.length - 1] + lastFib[lastFib.length - 2]);
  
}

deepDup = (arr) => {
  const dupArr = [];
  arr.forEach(el => {
    if (el instanceof Array) {
      dupArr.push(deepDup(el));
    } else {
      dupArr.push(el);
    }
  })
  return dupArr;
}

let arr1 = [1,2,3,4,5,6,7];
let target = 6;

bsearch = (arr, target) => {

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid+1, arr.length);
  if (target > arr[mid]) {
    let location = bsearch(right, target);
    if (location === -1 ){
      return -1;
    }
    else {
      return mid + 1 + location;
    }
  }
  else if (target < arr[mid]) {
    return bsearch(left, target);
  }
  else if (target === arr[mid]) {
    return mid;
  }
  else {
    return -1;
  }
}

mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right))
}

merge = (left, right) => {
  let merged = []
  while (left.length > 0 && right.length > 0) {
    switch (left[0] > right[0]) {
      case true:
        merged.push(right.shift());
        break;
      case false:
        merged.push(left.shift());
        break;
    }
  }
  return merged.concat(left).concat(right)
}

subsets = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let previousSubset = [];

  for (let i = 1; i <= arr.length; i++) {
    previousSubset.push(arr.slice(0,i))
  }
  
  return previousSubset.concat(subsets(arr.slice(1, arr.length)));
}
