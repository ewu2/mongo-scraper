var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    title:{
        type: String,
        required: true,  
    },
    
    poster:{
        type: String,
        required: true 
    },
    
    body:{
        type: String,
        required: true
    },
    
    postedOn: { 
        type: Date, 
        default: Date.now
    }
});

var Comment = mongoose.model(
    "Comment", CommentSchema
)

module.exports = Comment;