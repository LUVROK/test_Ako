import { findMinRow } from "./utils.js";

const arr = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 201) - 100));

const { minr } = findMinRow(arr);
console.table(arr);

console.log(`\nЧисла в строках с минимальным числом помечены звездочкой: ${minr}`);
for (let i = 0; i < arr.length; i++) {
  let row = "";
  let minPositive = 9999;
  let count = 0;
  let signCount = 0;

  for (let j = 0; j < arr[i].length; j++) {
    row += arr[i][j] + " \t";
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

  if (minr.includes(i)) {
    console.log(
      i +
        "* \t" +
        row +
        `\n| Наименьшее положительное число в строке - ${i}, число - ${minPositive !== 9999 ? minPositive : "none"} \n| ` +
        `Минимальное количество чисел, которые нужно заменить, чтобы не было 3 положительных или отрицательных чисел подряд - Строка - ${i}, чисел - ${count}`
    );
  } else {
    console.log(
      i +
        "  \t" +
        row +
        `\n| Наименьшее положительное число в строке - ${i}, число - ${minPositive !== 9999 ? minPositive : "none"} \n| ` +
        `Минимальное количество чисел, которые нужно заменить, чтобы не было 3 положительных или отрицательных чисел подряд - Строка - ${i}, чисел - ${count}`
    );
  }
  console.log('|')
}

console.log();
