/*
次のようなnestedArrayを最終的にTODOに沿って足し合わせてください。
*/

function flattenArray(arr) {
  return arr.flat(Infinity);
}

function multiplyArray(arr) {
  return arr.map((num) => num * 3);
}

function sumArray(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
}

function flattenAndMultiply() {
  let nestedArray = [1, [2, [3, [4, [5]]]]];

  const flattendList = flattenArray(nestedArray);
  const multiplyList = multiplyArray(flattendList);
  return sumArray(multiplyList);
}

/** こっちを採用 */
function flattenAndMultiply2() {
  let nestedArray = [1, [2, [3, [4, [5]]]]];
  return nestedArray
    .flat(Infinity)
    .map((num) => num * 3)
    .reduce((sum, item) => sum + item, 0);
}

// console.log(flattenAndMultiply());
console.log(flattenAndMultiply2());
