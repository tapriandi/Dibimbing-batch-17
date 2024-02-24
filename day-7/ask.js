// array to object
// object to array

// ========================

let array = [1, 2, 3, 4, 5];
let obj = { val1: 1, val2: 2, val3: 3, val4: 4, val5: 5 };

// let obj2 = {};

// for (let i = 0; i < array.length; i++) {
//     obj2['val' + (i + 1)] = array[i];
// }

// console.log(obj2);

//{ val01: 1, val11: 2, val21: 3, val31: 4, val41: 5 }
//{ val1: 1, val2: 2, val3: 3, val4: 4, val5: 5 }

let newArr = [];
for (const key in obj) {
  newArr.push(obj[key]);
}

// console.log(newArr);
