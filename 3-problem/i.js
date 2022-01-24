function printNumber() {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
        console.log(i);
        }, i * 3000);     
    }
}

//printNumber();


// Input: My Name Is Prashant!
// output: Ym Eman Si !tanhsarp
function revert(input) {
 // convert into an array
    const arr = [];
    const word = input.split(' ');
    console.log(word);
    word.forEach((element) => {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(element);
        }
    });
}

//revert('My Name Is Prashant!'); 

// let Array = ['a', 'b', 'c', 'd', 'a', 'e', 'b', 'c', 'd'];
// ouput: {'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 1}

function convertToObject() {
    let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'b', 'c', 'd'];
    const result = arr.reduce((e,j) => {
        return e[j] ? ++e[j] : e[j] = 1, e;
    },{ });
    console.log(result);
}

convertToObject();

const get = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("I am two")
        }, 1000);
    })
}
const getCall = async (params) => {
    const response = await get(params);
    console.log(response);
}

getCall()