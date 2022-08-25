const sumValues = (a, b) => {
  return a + b;
};
//Testcase
console.log(sumValues(1, 2));

const sliceString = (slicableString) => {
  return slicableString.slice(-3);
};

//Testcase
console.log(sliceString("foobar"));

const splitNumber = (a) => {
  const newArray = a.toString().split("");
  return newArray.map((x) => parseInt(x));
};

//Testcase
console.log(splitNumber(451239191919192923));

const spliceArray = (array, numberOfDigits) => {
  const arrayLength = array.length;
  const startIndex = arrayLength - numberOfDigits;
  if (numberOfDigits <= 0) {
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

const mergeArrays = (firstArray, secondArray) => {
  const combinedArray = [...firstArray, ...secondArray];
  const removeDuplicatesArray = new Set(combinedArray);
  const filteredArray = Array.from(removeDuplicatesArray);
  filteredArray.sort();
  return filteredArray;
};
//Testcase
console.log(mergeArrays([1, 2, 3], [6, 1, 4, 5]));


const checkIfBExists = (obj, key) => {
  if (!obj[key]){
    return false
  }else{
    return true;
  }
};

//Testcase
console.log(checkIfBExists({foo:"haha"},"foo"));
