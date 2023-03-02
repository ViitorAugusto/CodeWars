// Você deve conhecer alguns quadrados perfeitos bem grandes. Mas e o PRÓXIMO?

// Complete o findNextSquare método que encontra o próximo quadrado perfeito integral após aquele passado como parâmetro. Lembre-se de que um quadrado perfeito integral é um inteiro n tal que sqrt(n) também é um inteiro.

// Se o parâmetro em si não for um quadrado perfeito, ele -1 deve ser retornado. Você pode assumir que o parâmetro não é negativo.

// Exemplos: (Entrada --> Saída)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   let num = Math.sqrt(sq);
//   let square = sq;
//   if ((num * 10).toString().at(-1) == "0") {
//     square++;
//     while ((Math.sqrt(square) * 10).toString().at(-1) != "0") {
//       square++;
//     }

//     return square;
//   }

//   return -1;
// }

function findNextSquare(n) {
  const raiz = Math.sqrt(n);
  if (raiz % 1 !== 0) return -1;
  return Number(raiz + 1) * Number(raiz + 1);
}

console.log(findNextSquare(144));
