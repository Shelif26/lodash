const ch = require("lodash");

const chunk_ = ch.chunk(["a", "b", "c", "d"], 3);

console.log(chunk_);

// chunk will retruns or gives value of sliced array with given number of index in an particular array

const compact = ch.compact([0, 1, "null", false, 2, "", 3]);

console.log(compact);

// compact will help us to return except null values boolean values and 0 will returns integer and string

const concat = ch.concat(
  "1",
  2,
  "string",
  false,
  { name: "string", age: 00 },
  [1, 2, 3, 4],
  [[2, 3, 4]]
);

console.log(concat);

// concat will help us to join a array or even some other value in a single array

const differance = ch.difference(["1", "2", 4, 2], [2, 1, 3]);

console.log(differance);

// difference will help us to get the value which is not in another array of variable

const differanceBy = ch.differenceBy([1, 2, 1, 4, 5], [6, 7, 8, 9],Math.floor);

console.log(differanceBy);

//-----------------------------------------------------need to be clarified-----------------------------------------------------------//
