const express = require('express');
const app = express();
const cors = require('cors');

queries = [
    {name: 'food', urllink: 'https://en.wikipedia.org/wiki/Food'},
    {name: 'instagram', urllink: 'https://www.instagram.com/'},
    {name: 'facebook', urllink: 'https://www.facebook.com/'},
    {name: 'pokemon', urllink: 'https://www.pokemon.com/us/'},
    {name: 'nasa', urllink: 'https://www.nasa.gov/'},
    {name: 'anime', urllink: 'https://en.wikipedia.org/wiki/Anime'},
    {name: 'skydiving', urllink: 'https://ukskydiving.com/'},
    {name: 'travel', urllink: 'https://www.tripadvisor.co.uk/'},
    {name: 'tiktok', urllink: 'https://www.tiktok.com/'},
    {name: 'spotify', urllink: 'https://open.spotify.com/'}
]