let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function arrReverse(arr) {
  let arrReversed = [];
  let sum = 0;
  for (let a = 0; a < arr.length; a++) {
    arrReversed.unshift(arr[a]);
    sum = sum + arr[a];
  }

  if (arr.length > 10 && arr.length % 2 === 0) {
    sum = 0;
    arrReversed = arrReversed.slice(arr.length / 2, arr.length);
    for (let b = 0; b < arrReversed.length; b++) {
      sum = sum + arrReversed[b];

      arrReversed[b] = arrReversed[b] * 2;
    }
  } else {
  }

  return arrReversed + " and " + sum;
}

console.log(arrReverse(arr1));

console.log(arrReverse(arr2));

console.log(toUpperCase(prompt("Enter a string")));

function toUpperCase(string) {
  let newString = "";
  newString = string.toUpperCase();
  newString = newString.replace(/^\s+|\s+$/gm, "");
  if (newString.length >= 4) {
    newString = newString.substring(0, 4);
  } else {
    return "error";
  }
  return newString;
}

//get yesterday's date
let today = new Date();
let yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
console.log(yesterday);
