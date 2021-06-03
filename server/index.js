const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home');
})

app.get("/profiles", (req, res) => {
    res.send('Profiles')
})

app.post('/profile', (req, res) => {
    res.send('Added')
})

app.listen('7777', () => {
    console.log('Server Started on PORT 7777.')
})