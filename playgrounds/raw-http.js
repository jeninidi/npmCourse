const https = require('https')
//const request = require ('request')
const url = 'https://api.darksky.net/forecast/329b6851c2f5171de86bee0c67e997e3/40,-70?units=si&lang=bg'

const request = https.request(url, (response) =>{
let data = ' '

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data) 
        console.log(body)
    })
})

request.on('error', (error) => {
console.log('An error', error)
})

request.end()