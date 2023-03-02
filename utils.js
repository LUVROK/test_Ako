export const findMinRow = (arr) => {
  let min_number = arr[0][0];
  let min_row = 0;
  let mass_min_numbers = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min_number) {
        min_number = arr[i][j];
        min_row = i;
      }
    }
  }

  mass_min_numbers.push(min_row);
  let newmass = arr;
  for (let i = 0; i < newmass.length; i++) {
    for (let j = 0; j < newmass[i].length; j++) {
      if (min_number === newmass[i][j]) {
        mass_min_numbers.push(i);
        newmass[i][j] = `${newmass[i][j]}*`;
      }
    }
  }

  // console.table(newmass);

  return {
    minr: mass_min_numbers.filter((num, index) => {
      return mass_min_numbers.indexOf(num) === index;
    }),
    newmass,
  };
};
