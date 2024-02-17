// const buah = ['jambu', 'semangka', 'nanas'];
// buah.push('jeruk'); // --> tambah di akhir
// buah.unshift('pepaya'); // --> tambah di depan
// buah.shift(); // --> remove/delete data di index pertama
// buah.pop(); // --> remove/delete data di index terakhir

// const buah = ["jambu", "semangka", "nanas", "jeruk", "pepaya", "pisang"];
// // buah.shift();
// // buah.pop();
// // buah.pop();
// // buah.pop();
// const res = buah.slice(3, 6); // (index, length array)

// console.log(res);

// let res2 = []
// for (let i = 0; i < buah.length; i++) {
//     if(buah[i] == 'strowbery') {
//         res2.push(buah[i])
//     }
//     if(buah[i] == 'pisang') {
//         res2.push(buah[i])
//     }
// }

// console.log(res2)
// ['semangka', 'nanas']

// mutidimensi

let matrix = [
  [11, 2, 3],
  [4, 45, 6],
  [7, 81, 9],
];

// let res = matrix[2][2];

// console.log('output : ', res);

// 2,5,8
// map, foreach

// jumlahkan semua nilai yang ada di dalam matrix
// let res = 0;
// for (let i = 0; i < matrix.length; i++) {
// //   console.log(matrix[i]);
//   for (let j = 0; j < matrix.length; j++) {
//     // console.log(matrix[i][j]);
//     res = res + matrix[i][j];
//   }
// }

// console.log(res)
// let count = 0;
// matrix.map((val) => {
//   val.map((num) => {
//     count += num;
//   });
// });
// console.log(count);

// output:  [11, 2, 3, 4, 45, 6, 7, 81, 9]
// let temp = [];
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     temp.push(matrix[i][j]);
//   }
// }

// console.log(temp);

// let matrix2 = [
//   [11, 2, 3],
//   [4, -45, 6],
//   [7, 81, 9],
// ];

// let temp = 0;



