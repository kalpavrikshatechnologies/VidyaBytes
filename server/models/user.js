const mongoose= require('mongoose')
// const jwt= require('jsonwebtoken')
// const joi= require('joi');
// const passwordComplexity=require('joi-password-complexity');
const bcrypt = require("bcryptjs");

const userSchema= new mongoose.Schema({
    name:
    {
        type : String ,
        required : true,
        trim:true
    },
    email:
    {
        type : String ,
        required : true,
        unique:true,
    },

    phone:
    {
        type : String ,
        required : true,
    },

    password:
    {
        type : String ,
        required : true,
    },
    verifytoken:{
        type : String 

    }
});


// userSchema.pre("save", async function (next) {

//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 10);
        
//     }
//     next()
// });

const  user =mongoose.model("registrations", userSchema);


// userSchema.methods.generateAuthToken= function(){
//     const token = jwt.sign({_id: this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
//     return token
// };

// const  User =mongoose.model("user", userSchema);


// const validate= (data)=>{
//     const schema = joi.object({
//         name: joi.string().required().label("Full Name"),
//         phone: joi.string().required().label("Phone Number"),
//         email: joi.string().required().label("Email"),
//         password: passwordComplexity().required().label("Password"),
        
//     });
//     return schema.validate(data)
// };

module.exports= user;
