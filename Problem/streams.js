const {createReadStream} = require('fs');
const {pipeline} = require('stream');
const {createServer} = require('http')

const server = createServer((req, res) => {
    pipeline(createReadStream(__filename), pipe(res), (err) => {
        if(err)    console.log(err);
    })
})

server.listen(3000);

async function run () {
    const stream = createReadStream('./Big-file')
    for await (let chunk of stream) {
        // do something
    }
    // stream ended
}

run()