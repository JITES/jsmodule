const eventEmitter = require("events")
const { EventEmitter } = require("stream")

const event = new EventEmitter()

event.on('check', () => {
    console.log('this is an event');
})

event.emit('message', { data : 'this is data'})