// setTimeout(() => { console.log('HI') }, 0);
// setImmediate(() => { console.log('HELLO') });


// setTimeout(() => { console.log('HI') }, 0);

// setImmediate(() => { console.log('HELLO') });

// process.nextTick(() => {

// console.log(13);
// });

// console.log(a);
// let a = 10;

// a();
// var a = () => { console.log('func executed') }

// a();
// var a = function() { console.log('func executed') }


// let obj = {
//     a: 10,
//     b: 20,
//     func: () => { console.log(this.first_name) }
//     }

// let name = {
//         first_name : 'Jitesh'
//     };

// let a = name;
// a.first_name = 'test'
// console.log(a);
// console.log(name);

// const arr = [ { name: 'N_jitesh' }, { name: 'N_satish' } ];

// const trimmed = arr.map((e) => {
//     return e.name.replace("N_","");
// })

// console.log(trimmed);


const arr = [7, 1 , 8, 5, 0, 1, 5, 8, 0, -1];

const uniq = [...new Set(arr)];
uniq.sort().reverse();
console.log(uniq);

const sentence = "Welcome to Hello World";

const temp = sentence.split(" ");
temp.forEach((element) => {
    
});


async function func() {
    await console.log('12');
    await console.log('21');
   console.log('22');
   }

   func()
