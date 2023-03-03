import { findMinRow } from "./utils.js";

const arr = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 201) - 100));

const { minr } = findMinRow(arr);

let headerString = "    ";
for (let i = 0; i < arr[0].length; i++) {
  const columnIndexString = String(i).padStart(4, " ");
  headerString += "| " + columnIndexString + " ";
}
console.log(headerString + "|");

let separatorString = "    ";
for (let i = 0; i < headerString.length - 4; i++) {
  separatorString += "-";
}
console.log(separatorString);

for (let i = 0; i < arr.length; i++) {
  let row = "";
  let minPositive = 9999;
  let count = 0;
  let signCount = 0;

  let rowString = String(i).padStart(2, " ") + "  | ";
  for (let j = 0; j < arr[i].length; j++) {
    const cellString = String(arr[i][j]).padStart(4, " ");
    rowString += cellString + " | ";

    if (arr[i][j] > 0 && arr[i][j] < minPositive) {
      minPositive = arr[i][j];
    }
    if (arr[i][j] === 0 || (j > 0 && arr[i][j] * arr[i][j - 1] < 0)) {
      signCount = 1;
    } else if (++signCount === 3) {
      signCount = 0;
      count++;
    }
  }

  const cellString__minPositive = String(`${minPositive !== 9999 ? minPositive : "none"}`).padStart(4, " ") + "  | ";
  const cellString__count = String(`${count}`).padStart(4, " ") + "  | ";

  console.log(rowString + (minr.includes(i) ? " *" : "") + `\t|${cellString__minPositive}` + `${cellString__count}`);
  console.log(separatorString);
}

console.log();
