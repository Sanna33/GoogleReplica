const express = require('express');
const app = express();
const cors = require('cors');

queries = [
    {name: 'food', urllink: 'https://en.wikipedia.org/wiki/Food'},
    {name: 'food', urllink: ''},
    {name: 'food', urllink: ''},
    {name: 'food', urllink: ''},
    {name: 'food', urllink: ''},
    {name: 'anime', urllink: 'https://en.wikipedia.org/wiki/Anime'},
    {name: 'skydiving', urllink: 'https://ukskydiving.com/'},
    {name: 'travel', urllink: 'https://www.tripadvisor.co.uk/'},
    {name: 'tiktok', urllink: 'https://www.tiktok.com/'},
    {name: 'spotify', urllink: 'https://open.spotify.com/'}
]