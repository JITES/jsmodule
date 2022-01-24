// const arr = [1,2,3,4,5];

// function sqEven(arr) {
//    const res = arr.filter(n => n % 2 === 0).map((e) => {
//      return  e **2;
//    })
//    console.log(res);
// }

// const result = sqEven(arr);

// // user
// // Method - Post
// // api/user
// // req -> {
// //     user 
// // }




// function asyncTask() {

//     return functionA()
    
//     .then((valueA) => functionB(valueA))
    
//     .then((valueB) => functionC(valueB))
    
//     .then((valueC) => functionD(valueC))
    
//     .catch((err) => logger.error(err))
// }

// const asyncTask = async () => {
//     try {
//         const valueA = await functionA();
//         const valueB = await functionB(valueA);
//         const valueC = await functionC(valueB);
//         const valueD = await functionD(valueC);    
//     } catch (error) {
//      console.log(error)   
//     }
// }

//  const isGreater = (a, b) => {

// return new Promise ((resolve, reject) => {

//     if(a > b) {
//     resolve(true)
//     } else {
//     reject(false)
//     }
//     })
//     }
    
// isGreater(2, 2)
//     .then(result => { 
//     console.log('greater') 
//     })
//     .catch(result => {
//     console.log('smaller')
//     });
// // 
const messages = [];
const first = () => messages.push('first')
const second = () => messages.push('second')
const third = () => messages.push('third')
const fourth = () => messages.push('fourth')


setImmediate(first)
process.nextTick(second)
setTimeout(third, 1)
fourth() 


console.log(messages);

// const events = require('events');

// var eventEmitter = new events.EventEmitter();

// var lister = function listner() {
//     console.log('listner executed');
// }


// Array.prototype.tt = function() {
//     var abc = this.reduce(function(prev, cur) { return prev + cur; });
//     return abc / this.length;
//     }
    
//     var arr = [1, 2, 3, 4, 5];
//     var result = arr.tt();
//     console.log(result);


//     const j = 1
//     let s = j; // this is shallow copy

//     const a = [1,2,3]

//     let b = [...a] // deep copy

//     hoisted();
//     function hoisted (params) {
        
//     }

//     const arrow = () => {

//     }

//     // Given list of strings, print both the strings if they are anagrams of one another

// var input = "monk, konm, mary, army,abc;

// monk,konm
// konm,monk
// mary,army
// army,mary

// for (let i = 0; i < array.length; i++) {
//    for (let j = 0; j < array.length; j++) {
//       if(i === j) {
          
//       }
       
//       tempWord[i] === word[j];
//    }
    
// }

// let str = 12345;

// function sum(str) {
//     let added = 0;
//     for (let i = 0; i < str.length; i++) {
//         const element = array[i];
//         added = added + element;
//     }
//     sum(added);
// }