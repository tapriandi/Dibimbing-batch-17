// for (let i = 0; i < 10; i++) {
//   console.log("hello world " + i);
// }

// console.log("hello world ");
// console.log("hello world ");
// console.log("hello world ");
// console.log("hello world ");
// console.log("hello world ");
// console.log("hello world ");
// console.log("hello world ");
// console.log("hello world ");

let data = [1, 2, 3, 4, 5, 6, 7];
let cariAngka = 1;

function test() {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === cariAngka) {
      return console.log("ada");
      //   break;
    } else {
      return console.log("nga ada");
      //   break;
    }
  }
}

let data2 = [1, 3, 5, 4, 9, 6, 7, 100]; //[ 1, 3, 4, 5, 6, 7, 9]
let sorting = data2.sort();

// console.log(sorting)

//[ 1, 100, 3, 4, 5, 6, 7, 9 ]

let data3 = ["semangka", "jeruk", "apel", "buah naga"];
// output = ['apel', 'buah naga', 'jeruk', 'semangka'];

let urut = data3.sort();
console.log(urut);
