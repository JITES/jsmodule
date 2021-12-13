// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();

// var a = 10;
// function foo() {
//     console.log(a); // ? Reference error
//     let a = 20;
// }
// foo();

// var array = [];
// for(var i = 0; i <3; i++) {
//  array.push(() => i);
// }
// var newArray = array.map(el => el());
// console.log(newArray);

// var obj = { a: 1, b: 2 };
// Object.setPrototypeOf(obj, {c: 3});
// Object.defineProperty(obj, 'd', { value: 4, enumerable: false });

// // what properties will be printed when we run the for-in loop?
// for(let prop in obj) {
//     console.log(prop);
// }

// var x = 10;
// var foo = {
//   x: 90,
//   getX: function() {
//     return this.x;
//   }
// };
// console.log(foo.getX()); // prints 90
// var xGetter = foo.getX;
// console.log(xGetter()); // prints ??

// (function() {
//     var a = b = 5;
//   })();
  
//   console.log(b);

for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 1000 + i);
  }
  
  console.log(typeof undefined);
  console.log(typeof null);
  if(null === undefined)
      console.log('null == undefined true');
  