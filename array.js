/*
  Merge several arrays into one and get only the unique values out of it.
*/
function mergeUnique(arr) {
    arr = [...arguments].flat();
    return [...new Set(arr)];
}

/*
  Alternative mergeUnique() with FOR loop
*/
function _mergeUnique(arr) {
  arr = [...arguments].flat();
  let uniques = [];
  
  for (let val of arr) {
    if (uniques.indexOf(val) === -1)
      uniques.push(val);
  }
  return uniques;  
}
