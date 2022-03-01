const EventEmitter = require('events')

const customEmitter = new EventEmitter()



customEmitter.on('response', (name, id) => {
    console.log(`data recieved user: ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log('some other logic here')
})

customEmitter.emit('response', 'phuoc', 04)
//emit dat phia tren thi hoat dong dat phia duoi thi khong