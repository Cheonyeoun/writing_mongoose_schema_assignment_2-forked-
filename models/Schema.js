const mongoose = require('mongoose');



const commentSchema = new mongoose.Schema({

    username:{
        type:String,
    },
    message:
    {
        type:String,
        required:true
    },
    commentDate:
    {
        type:Date,
        default:Date.now
    }
});


const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true,
        minlength:5
    },
    content:{
        type:String,
        required:true,
        minlength:50
    },
    author:{
        type:String
    },
    tags:{
        type:[String]
    },
    category:
    {
        type:String,
        default:"General"
    },
    likes:{
        type:[String]
    },
    creationDate:
    {
        type:Date,
        default:Date.now
    },
    updatedDate:
    {
        type:Date,
        default:Date.now
    },
    comments:[commentSchema]


});

const blog = mongoose.model("blog",blogSchema);

module.exports = blog;