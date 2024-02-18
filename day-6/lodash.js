import _ from "lodash";

// function square(n) {
//   return n * n;
// }

// const res = _.map([4, 8], square);
// => [16, 64]

// var users = [
//   { user: "barney", kelas: "a" },
//   { user: "fred", kelas: "c" },
// ];

// // The `_.property` iteratee shorthand.
// const res = _.map(users, "kelas");
// // => ['barney', 'fred']

// join ==============

// const res = _.join(['a', 'b', 'c'], '~');
// => 'a~b~c'

// isEqual ==============

// var object = { a: 1 };
// var object1 = { a: 1 };

// // const res = _.isEqual(object, object1);
// const res = object == object1;
// // => true

// console.log(res);

// some ==============

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
];

// The `_.matches` iteratee shorthand.
// const res = _.some(users, { user: "barney", active: true });
// const obj = { user: "barney", active: true };

// const res = users.some((item) => item.user === obj.user);
// // => false

// console.log(res);

const res = _.mean([1, 2, 3, 4, 8, 9, 5]); // a
console.log(res);
