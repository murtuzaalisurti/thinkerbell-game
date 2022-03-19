const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');

const Words = require('./models/wordsModel');

const express = require('express');
const app = express();
const db_conn_uri = process.env.MONGOURI;

app.get('/', (req, res) => {
    res.send('server running');
});

app.get('/wordsData', (req, res) => {
    mongoose.connect(db_conn_uri, {
        useNewUrlParser: true
    }).then(async () => {
        console.log('Connected to mongodb');
    
        let wordsDoc = await Words.find({});
    
        let wordsObject = wordsDoc[0].words;

        res.status(200).json(wordsObject);
        
    }).catch((err) => {
        console.error(err)
    })
})
app.listen(process.env.PORT, () => console.log('listening'));

module.exports = app;