import { findMinRow } from "./utils.js";

const arr = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 201) - 100));
// console.table(arr);

const { minr } = findMinRow(arr);
console.log(`Числа в строках с минимальным числом помечены звездочкой: ${minr}`);

console.info("\nНаименьшее положительное число в строке");
for (let i = 0; i < arr.length; i++) {
  let minPositive = 9999;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > 0 && arr[i][j] < minPositive) {
      minPositive = arr[i][j];
    }
  }
  console.log(`Строка - ${i}, число - ${minPositive}`);
}

console.info(
  "\nМинимальное количество чисел, которые нужно заменить, чтобы не было 3 положительных или отрицательных чисел подряд"
);

arr.forEach((str, i) => {
  let count = 0;
  let signCount = 0;
  str.forEach((el, j) => {
    if (el === 0 || (j > 0 && el * arr[i][j - 1] < 0)) {
      signCount = 1;
    } else if (++signCount === 3) {
      signCount = 0;
      count++;
    }
  });
  console.log(`Строка - ${i}, чисел - ${count}`);
});

console.log();
