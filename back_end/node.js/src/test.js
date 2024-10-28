const path = require('path')
const express = require('express')
const request = require('request')
const hbs = require('hbs')
const { log } = require('console')
const app = express()

//function to load api joke
const getJoke = (callback) => {
    const url = 'https://official-joke-api.appspot.com/random_joke'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to api', undefined)
        } else if (response.body.setup.length === 0) {
            callback('Unable to find joke. Try another search.',undefined)
        } else {
            callback(undefined, response.body.setup+"\n"+response.body.punchline)
        }
    })
}

//load all the project files like css and js
const publicDirectoryPath = path.join(__dirname, '..\\..\\..\\front_end')
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')



app.get('',(req,res)=>{
    joke: 'loading'
    getJoke((error, joke) => {
        if (error) {
            return res.render('index', {
                joke: 'Error fetching joke'
            });
        }
        res.render('index', {
            joke: joke || 'No joke available'
        });
    });
})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})