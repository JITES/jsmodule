
function convertToObject() {
    let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'b', 'c', 'd'];
    const result = arr.reduce((e,j) => {
        return e[j] ? ++e[j] : e[j] = 1, e;
    }, {});
    console.log(result);
}

convertToObject()

const keys = ['product', 'model', 'version'];
const result = keys.reduce((res, key) => ({[key]: res}), {});

console.log(result);