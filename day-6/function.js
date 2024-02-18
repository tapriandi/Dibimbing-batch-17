// function namaFunc() {
//   console.log("masuk");
// }

// // namaFunc();

// export const func = () => {
//   namaFunc();
//   console.log("masuk");
// };

// func();

// let siswa = {
//     panggil: () => {
//         console.log('hallo')
//     }
// }

// siswa.panggil();

// function sayHi(name) {
//   //   const pesan = "Hi" + name;
//   //   console.log(pesan);
//   return '';
// }

// const test = sayHi();
// console.log(test);

// IIFE
// (()=> {
//     console.log('IIFE')
// })();
// useEffect(() => { function }, [])

/// =======================
// function penjumlahan(num1, num2) {
//   return num1 + num2;
// }

// function average(array) {
//   let res = 0;
//   for (let i = 0; i < array.length; i++) {
//     res += array[i];
//   }
//   return res / array.length;
// }

// // prop
// function hitung(symbol, param1, param2) {
//   let hasil = "";

//   if (symbol === "+") {
//     hasil = penjumlahan(param1, param2);
//   }
//   if (symbol === "ave") {
//     hasil = average(param1);
//   }

//   console.log(hasil);
//   //   return hasil;
// }

// hitung("+", 2, 5);
// hitung("ave", [1, 2, 3, 4, 5]);

// // console.log(res)
// // undefined
// //

// =======================

let ok = "lili";
let test = 'zidan';

function panggil(param) {
  let nama = param;
  nama = "tono";    

  console.log("1: ",nama);

  if (true) {
    console.log("2: ", param);
  }
}

panggil('santo');

console.log("3: ", nama);
