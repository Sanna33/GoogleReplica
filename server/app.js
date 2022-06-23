
const express = require('express')
const app = express()
const cors = require('cors');
// const port = 3000

queries = [
    {id: 1, name: 'food', urllink: 'https://en.wikipedia.org/wiki/Food'},
    {id: 2, name: 'instagram', urllink: 'https://www.instagram.com/'},
    {id: 3, name: 'facebook', urllink: 'https://www.facebook.com/'},
    {id: 4, name: 'pokemon', urllink: 'https://www.pokemon.com/us/'},
    {id: 5, name: 'nasa', urllink: 'https://www.nasa.gov/'},
    {id: 6, name: 'anime', urllink: 'https://en.wikipedia.org/wiki/Anime'},
    {id: 7, name: 'skydiving', urllink: 'https://ukskydiving.com/'},
    {id: 8, name: 'travel', urllink: 'https://www.tripadvisor.co.uk/'},
    {id: 9, name: 'tiktok', urllink: 'https://www.tiktok.com/'},
    {id: 10, name: 'spotify', urllink: 'https://open.spotify.com/'}
]



app.use(cors());

app.get('/', (req, res) => {
    res.send('Hellllooooo')
  })
  
app.get('/queries', (req, res) => {
    res.send(queries)
})

// app.get('/queries/:id', (req, res) => {
//     const id = req.params.id - 1;
//     if ( id < queries.length) {
//         res.send(queries[id]);
//     } else {
//         res.status(202).send('No result for this!')
//     }
// })

app.get('/queries/random', (req,res) => {
    const random = Math.floor(Math.random() * 10)
    res.send(queries[random]);
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })