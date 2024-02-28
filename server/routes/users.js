const { validate, User } = require('../models/user');

const router = require('express').Router();

const bcrypt= require('bcrypt');

router.post('/',async(req,res)=>{
    try{
        const { error }= validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message});

        const user = await User.findOne({email:req.body.email});
        if(user)
            return res.status(409).sendFile({message: " User already exist!"})

        const salt=  await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword= await bcrypt.hash(req.body.hashPassword,salt);

        await new User({ ...req.body,password:hashPassword }).save();
        res.status(201).send({message:"User created successfully"});


    }catch(error) 
    {
        res.status(500).send({message: " Internal Server Error"});
    }
});

module.exports=router;