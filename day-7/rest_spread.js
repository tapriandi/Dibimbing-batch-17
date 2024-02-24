// REST OPERATOR

// function panggilName(name, umur, ...res) {
//   console.log(name);
//   console.log(res);
// }

// let arr = [1, 2, 3, 4, 5];
// let obj = { name: "budi", alamat: "bandung" };

// panggilName("lili", 10, "jakarta", "baca", arr, obj);

// ['jakarta', 'baca']
// [ 'jakarta', 'baca', [ 1, 2, 3, 4, 5 ] ]
// [
//   'jakarta',
//   'baca',
//   [ 1, 2, 3, 4, 5 ],
//   { name: 'budi', alamat: 'bandung' }
// ]

// ** SPREAD OPERATOR **
// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];

// let res = num1 + num2; // 1,2,34,5,6
// let res = [num1 + num2]; // [ '1,2,34,5,6' ]
// let res = [num1, num2]; // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// let res = [...num1, num2]; // [ 1, 2, 3, [ 4, 5, 6 ] ]
// let res = [...num1, ...num2]; // [ 1, 2, 3, 4, 5, 6 ]
// let res = ["a", "b", ...num1, "c", ...num2];  // [ 'a', 'b', 1, 2, 3, 'c', 4, 5, 6 ]

let obj1 = { name: "budi" };
let obj2 = { name: "zaki" };

// let res = [obj1, obj2]; // [ { name: 'budi' }, { name: 'zaki' } ]
// let res = { ...obj1, ...obj2 }; // { name: 'zaki'  }
// let res = { ...obj1, ...obj2 }; // { name: 'budi', obj2: { name: 'zaki' } }

// console.log(res);

// *** real case implementation on reactJs
// export default function Contact(props) { // { className, data, setShowLoading }
//     const { className, data, setShowLoading } = props;
//     // {className: props.className, data: props.data, setShowLoading: propssetShowLoading}
//     // console.log(props) --> { className, data, setShowLoading }
//     // props.className
//     // props.data
//     // props.setShowLoading

// *
// let obj = { name: "lili" };
// let res = [...obj]; // error not iterable

let arr = [1, 2, 3, 4, 5, 'lili'];
let res = {...arr} // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 'lili' }


console.log(res);
