const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

//set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Zheni D'
    })
})

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.render('help', {
        what: 'some documentation',
        subject: 'node with express',
        title: 'Help',
        name: 'Zheni Dimitrova'

    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Zheni Dimitrova'
    })
})

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'rainy',
        location: 'Copenhagen'
    }, {
        forecast: 'sunny',
        location: 'New York'
    }])
})

app.get('/help/*', (req, res) => {
    res.render( '404', {
        title: '404',
        name: 'Zheni Dimitova',
        errorMessage: 'Help article hot found'
    }

    )
})

app.get('*', (req, res) => {
    res.render('404', {
        title: ' 404',
        name: 'Zheni Dimitrova',
        errorMassage: 'Page not found'
                
    })
})

        app.listen(3000, () => {
            console.log('Server is up on port 3000')

        })