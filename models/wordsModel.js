const mongoose = require('mongoose');

const wordsSchema = new mongoose.Schema({
    words: {
        type: Object,
        required: true
    }
}, {
    collection: 'words'
});

module.exports = mongoose.model('wordModel', wordsSchema);