const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    Content: {type: String, required: [true, "Say something, I'm giving up on you."]},
    Rating: {type: Number, min: [1,"Gimme a value!"]}
}, {timestamps: true});
mongoose.model('Comment', CommentSchema);