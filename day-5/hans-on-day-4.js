// Buatkan sebuah function Asterik agar keluaran yang dihasilkan seperti dibawah :

//     *
//    **
//   ***
//  ****
// *****

// for (let i = 0; i < 5; i++) {
//   let temp = "";
//   for (let j = 0; j <= i; j++) {
//     temp += "*";
//   }
//   console.log(temp)
// }

// console.log(res)
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     let space = ' ';
//     console.log(space.repeat((n - i)) + str.repeat(i * 1));
// }

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += "*";
//   }

//   console.log(str);
// }

// function bintang(input) {
//     for (let i = 1; i <= input; i++) {
//         let spasi = '';
//         for (let j = 1; j <= input - i; j++) {
//             spasi += ' ';
//         }

//         let bintang = '';
//         for(let x = 1; x <= i; x++){
//             bintang += '* ';
//         }

//         console.log(spasi+bintang);
//     }
// }

// bintang(5);

// function bintang(input) {
//     for (let i = 1; i <= input; i++) {
//         let spasi = '';
//         for (let j = 1; j <= input - i; j++) {
//             spasi += ' ';
//         }

//         let bintang = '';
//         for(let x = 1; x <= i; x++){
//             bintang += '*';
//         }

//         console.log(spasi+bintang);
//     }
// }

// bintang(5);

// const asterik = (num) => {
//   let temp = "";
//   for (let i = 1; i <= num; i++) {
//     for (let space = num; space > i; space--) {
//       temp += " ";
//     }
//     for (let astrk = 1; astrk <= i; astrk++) {
//       temp += "*";
//     }
//     // console.log(temp);
//     // temp = "";
//     temp += "\n";
//   }
//   console.log(temp);
// };

// asterik(5);


// *****
// *   
// *   
// *****
// *   *
// *   *
// *****