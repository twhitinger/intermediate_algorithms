

 // return the symmetric difference of the two arrays. Compare two arrays and return a new array with any
 // items only found in one of the two given arrays, but not both.

// Example with build in JS methods.

const diffArray = (arr1, arr2) => {
  return arr1.filter(i => arr2.indexOf(i) < 0).
  concat(arr2.filter(i => arr1.indexOf(i) < 0));
};


// Example using for loops

const symmetricDifference = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++){
    if ( arr2.indexOf(arr1[i]) === -1 ) {
      result.push(arr1[i]);
    }
  }

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      result.push(arr2[i]);
    }
  }

  return result;
};

// these solutions will work but we can do better because the solutions above become quite slow on larger arrays because they
// have O(n^2) complexity.


const difference = (arr1, arr2) => {
  let arr2Set = new Set(arr2);
  return arr1.filter( i => {
    return !arr2Set.has(i);
  });
};

const symmetricDifference = (arr1,arr2) => {
  return difference(arr1, arr2).concat( difference(arr2, arr1) );
};
