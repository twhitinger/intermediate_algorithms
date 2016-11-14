const diffArray = (arr1, arr2) => {
  return arr1.filter(i => arr2.indexOf(i) < 0).
  concat(arr2.filter(i => arr1.indexOf(i) < 0));
};
