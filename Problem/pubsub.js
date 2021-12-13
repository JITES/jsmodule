// const { table } = require("console");
// const { callbackify } = require("util");

// const publisher = (event, data) => {
//     hasSubscribers.forEach(element => {
//         callbackify(data);
//     });
// }

// const event = [];
// const subscriber = (event, func) => {
//     event.push(func);
// };


// // get post delete update tableName
// // interface Database {
// //     set(newValue): void;
// //     get(id: string): T;
// //     onBeforeAdd(listener: Listener): () => void;
// //     onAfterAdd(listener: Listener): () => void;
// //   }

// const user = {
//     firstName,
//     lastName,
//     age,
// }
  
// class InMemoryDB {
//     db = {};
//     set = (key, newValue) => {

//     if(!newValue)
//         db[key] = newValue;
//    }
// }

// function check() {
//     try {
//         throw new Error();
//     } catch (error) {
//         console.log(error);
//     }
// }

// check();

// setTimeout(function () {
//     console.log('setTimeout');
// }, 1)

// setImmediate(() => {
//     console.log('Immediate');
// })

// process.nextTick(() => {
//     console.log('Process next');
// })

// console.log('console.');


// Understanding setImmdeiate() method: Whenever we call setImmediate() method,
// it’s callback function is placed in the check phase of the next event queue. 
// There is slight detail to be noted here that setImmediate() method is called in the poll phase and it’s callback functions are invoked in the check phase.

setTimeout(function J() {
    console.log('setTimeout');
},0);
setImmediate(function A() {
    console.log("1st immediate");
});
  
setImmediate(function B() {
    console.log("2nd immediate");
});

promisey().then(function () {console.log('The promise is called');});

process.nextTick(function C() {
    console.log("1st process");
});
  
process.nextTick(function D() {
    console.log("2nd process");
});
  
// First event queue ends here
console.log("program started");

function promisey() {
    return new Promise((resolve, reject) => {
            return resolve(true);
    })
}