// Lexical scope

function outsideFunction() {
  const value = "Hello world";

  function insideFunction() {
    // 'value' from the outside function can be accessed inside
    // of this nested function.
    console.log(value);
    // Logs:
    // 'Hello world'
  }

  insideFunction();
}

outsideFunction();

//   Closure

function makeFunction(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeFunction(5);

console.log(add5(2));
console.log(add5(5));

const add10 = makeFunction(10);
console.log(add10(20));

/** Pass by Value and Pass by Reference **/
//! Pass by Value

function setToNewValue(oldValue) {
  // oldValue is 20, but we set it to 100
  oldValue = 100;
  // When we console.log oldValue it's going to be 100
  //    as expected
  console.log(oldValue);
  // Logs:
  // 100
}

let myValue = 20;
// We call 'setToNewValue' which sets the parameter
//    to 100, however this will not change 'myValue'
//    outside of the function
setToNewValue(myValue);
console.log(myValue);
// Logs:
// 20

//! Pass by Reference

function changeValue(arrayIn) {
  arrayIn.push("Hello world");
}

const initialArray = [0, 1, 2];
// The function 'changeValue' pushes a new value to the
//    parameter, but this ends up adding the value to the
//    array we're passing into the function
changeValue(initialArray);
console.log(initialArray);
// Logs:
// [0, 1, 2, 'Hello world']

/** Spread syntax **/

const oldArray = [0, 1, 2];
console.log(oldArray);

const newArray = [...oldArray];
console.log(newArray);

const newerArray = oldArray;
console.log(newerArray);
