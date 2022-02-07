const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()

const execute = async () => {
await producer.connect()
await producer.send({
  topic: 'test',
  messages: [
    { value: 'I am a dumb Data Engineer' },
  ],
})

await producer.disconnect()
}

execute().then((msg) => console.log('done'))