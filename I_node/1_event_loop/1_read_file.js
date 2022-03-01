const {readFile, writeFile} = require('fs')

console.log('started a first task')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')
//started a first task
//starting next task
//Hello this is first file
//completed first task  