const mergeArrays = (firstArray, secondArray) => {
  const combinedArray = [...firstArray, ...secondArray];
  const removeDuplicatesArray = new Set(combinedArray);
  const filteredArray = Array.from(removeDuplicatesArray);
  filteredArray.sort();
  return filteredArray;
};
//Testcase
console.log(mergeArrays([1, 2, 3], [6, 1, 4, 5]));

const spliceArray = (array, index) => {
  const arrayLength = array.length;
  const startIndex = arrayLength - index;
  if (index <= 0) {
    return [];
  }
  if (startIndex < 0) {
    return array;
  }
  const splicedArray = array.splice(startIndex);
  return splicedArray;
};
// Testcase
console.log(spliceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], -1));
