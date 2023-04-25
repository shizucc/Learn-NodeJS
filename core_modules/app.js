const fs  = require('fs')
const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface(
    input = stdin,
    output = stdout,
)
// console.log(fs)

// Make file synchronously
// fs.writeFileSync('test.txt', 'Hai Dunia')


// Make file asynchronous
// const data = "Sed aliquet egestas erat, sit amet mattis lorem lobortis euismod. Etiam vestibulum eleifend sodales. In eget nulla sed erat facilisis tincidunt. Nullam sodales massa tellus, quis vulputate mauris facilisis ac. In a velit leo. In quis pulvinar elit, a ultricies massa. Maecenas velit sem, ultricies in tempor non, ullamcorper sed lectus. In hac habitasse platea dictumst. Nunc orci felis, iaculis sit amet metus sit amet, consequat sagittis purus. In hac habitasse platea dictumst. Vestibulum commodo convallis magna, eget euismod metus lacinia eu. Cras rhoncus, leo in congue sollicitudin, justo massa maximus mauris, sed laoreet orci nunc sit amet erat. Proin accumsan justo ac nibh tincidunt, vel ultrices risus luctus. Nunc malesuada gravida neque quis feugiat. Maecenas rhoncus, nisl in finibus lacinia, risus enim finibus leo, sit amet porttitor metus lectus vel lacus."
// fs.writeFileSync('files/test2.txt',data, (e)=>{
//     console.log(e)
// })

// // Read file synchronously
// console.log(fs.readFileSync('test.txt', 'utf8'))

// // Read file asynchronously
// fs.readFile('files/test2.txt','utf-8', (e,data)=>{
//     if(e) throw e
//     console.log(data)
// })


rl.question('Whats is your name : ', (name)=>{
    rl.question('How old are you : ', (old)=>{
        const data = {
            name : name,
            years : old
        }
        const file = JSON.parse(fs.readFileSync('files/contact.json', 'utf8'))
        file.push(data)
        fs.writeFileSync('files/contact.json',JSON.stringify(file))
        rl.close()
    })
})