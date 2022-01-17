const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id:{
        type: ObjectId
    },
    title:{
        type: String,
        maxlength: 20
    },
    pid:{
        type: Number
    },
    wname:{
        type: String,
        maxlength: 10
    },
    date:{
        type: Date
    },
    content:{
        type: String
    },
    image:{
        type: String
    }
})

const Post = mongoose.model('Post', postSchema)
module.exports = { Post }