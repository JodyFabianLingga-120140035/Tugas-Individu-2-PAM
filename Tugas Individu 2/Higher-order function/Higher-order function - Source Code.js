const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterOdd(angka) {
  const filteredArr = [];
  for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 !== 0) {
      filteredArr.push(angka[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(angka));