// [INSTRUCTION]
// Membuat sebuah function dengan 2 parameter dengan tipe data number.
// Parameter pertama akan dikalikan sebanyak parameter kedua

// function hitung(num, pangkat) {
//     let res = 1;

//     for (let i = 0; i < pangkat; i++) {
//         res = res * num
//     }

//     console.log(res)
// }

function hitung(num, pangkat) {
  if (pangkat === 1) {
    return num;
  } else {
    return num * hitung(num, pangkat - 1);
  }
}

let res = hitung(2, 10); // 4

console.log(res)
