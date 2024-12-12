const fs = require('fs')

// fs.readFile('./blog.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('last line')


// fs.writeFile('./blog.txt', 'NESTO SASVIM NOVO', () => {
//     console.log('file was written')
// })

// fs.writeFile('./blog2.txt', 'NESTO SASVIM NOVIJE', () => {
//     console.log('file was written')
// })

// =====================

fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created')
})