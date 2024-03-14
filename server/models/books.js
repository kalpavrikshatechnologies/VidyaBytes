const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
     
      
    fileName:
    {
        type : String ,
        required : true,
    },
    title:
    {
        type : String ,
        required : true,
    },

    genre:
    {
        type : String ,
        required : true,
    },

    author:
    {
        type : String,
        required:true,
    },
    filePath:
    {
        type : String ,
        required : true,
    }, 

});

const  Books =mongoose.model("book", userSchema);


module.exports=Books;
