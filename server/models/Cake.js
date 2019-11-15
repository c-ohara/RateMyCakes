const mongoose = require('mongoose');
const CommentSchema = require('./../models/Comment');

const CakeSchema = new mongoose.Schema({
    Baker: {type: String, required: [true, "Who's the baker, brosef?"]},
    ImageUrl: {type: String, required: [true, "You need a picture, bro."]},
    Comments: [CommentSchema]
}, {timestamps: true});
mongoose.model('Cake', CakeSchema);