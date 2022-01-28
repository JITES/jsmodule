const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
  })
  
const consumer = kafka.consumer({ groupId: 'test-group' })

const consume = async () => {

await consumer.connect()
await consumer.subscribe({ topic: 'test', fromBeginning: true })

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
  },
})
}

consume().then(console.log)