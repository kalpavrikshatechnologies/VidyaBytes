const router= require("express").Router();
const {User} = require("../models/user");
const joi = require("joi");
const bcrypt= require('bcrypt');

router.post('/',async(req,res)=>{
    try{
        const {error}= validate(req.body);
        if(error)
        {
            return res.status(400).send({message: error.details[0].message});
        }
        const user= await User.findOne({email:req.body.email});
        if(!user)
            return res.status(401).send({message: "Invalid Email and Password"});

        const validPassword= await bcrypt.compare(
            req.body.password,user.password
        );
        if(!validPassword)
            return res.status(401).send({message:'Invalid Email or Password'});
        const token= user.generatedAuthToken();
        res.status(200).send({data: token, message:'logged in successfully'});
        
    }
    catch(error){
        res.status(500).send({message:'Internal server Error'});
    }
})

const validate=(data)=>{
    const schema= joi.object({
        email: joi.string().email().required().label('Email'),
        password: joi.string().required().label('Password'),
    });
    return schema.validate(data);
}
module.exports= router;