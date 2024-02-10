// // for (let i = 10; i > 1; i--) {
// //     console.log('ok');
// // }

// // let z = 9

// // if (z < 10) {
// //     console.log('ok');
// // }

// // z++

// // ok --> -1
// // ok --> -2
// // ok --> 2
// //...
// // ok --> -9

// // ------------------------
// // uncounted

// // let condition = true;

// // while(condition) {
// //     console.log('ok');
// //     condition = false;
// // }

// // counted
// let num = 1;

// while (num < 10) {
//     console.log('ok ' + num);

//     num++; // num = num + 1
// }

// // infinite
// // while(true) {
// //     console.log('ok');
// //.    break;
// // }

// // ------------------------
// // uncounted

// let condition = true;

// // while(condition) {
// //     console.log('ok');
// //     condition = false;
// // }

// do {
//     console.log('ok');
//     condition = false
// } while (condition);

// // counted
// let num = 1;
// do {
//     console.log('ok ' + num)
//     num++
// } while (num < 11);

/// -------
// let siswa = {
//     name: 'budi',
//     kelas: 3,
//     usia: 14,
//     alamat: 'Jakarta',
//     status: 'lulus'
// }

// for (let key in siswa) {
//     console.log(key + ': ' + siswa[key]);
// }

// let siswa = {
//     name: 'Ihwan',
//     kelas: '2',
//     usia: '19',
//     alamat: 'Ngawi',
//     status: 'lulus',
//     'jenis kelamin': 'laki - laki'
// }

// let array = [1, 2, 3, 4, 5, 6];

// for (let key of array) {
//     console.log(key)
// }

// let array = [
//   { nama: "lili", nilai: 70 },
//   { nama: "lala", nilai: 80 },
// ];

// array.forEach(function (siswa, index) {
//   // untuk lulus harus > 75
//   if (siswa.nilai > 75) {
//     console.log(siswa.nama);
//   }
// });


// nested loop
let matrix = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [5, 6, 7]
]

// output: 4

for (let i = 0; i < matrix.length; i++) {
    if (i === matrix.length - 1) {
        console.log(matrix[i])
        for (let x = 0; x < matrix[i].length; x++) {
            console.log(matrix[i][x])
        }
    }
}

let num = '11'
Number(num)
