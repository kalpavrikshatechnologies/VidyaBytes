const express = require('express')
const router = new express.Router;
const user = require("../models/user.js");
var bcrypt = require("bcryptjs");

router.post('/signup', async (req, res) => {

	const { name, email, phone, password } = req.body

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const userDetail = new user({ email, name, phone, password:hashedPassword })
		await userDetail.save()
		res.status(200).json({ status: 200 });

	} catch (err) {
		res.status(422).json({ status: 422 });

	}
})


router.post('/login', async (req, res) => {

	const { password, email } = req.body


	try {
		const data = await user.findOne({ email });

		if (data) {
			const passwordMatch = await bcrypt.compare(password, data.password);


			if (passwordMatch) {
				res.status(200).json({ status: 200 });
			} else {
				res.status(422).json({ status: 422, success: false, message: 'Invalid email or password' });
			}
		} else {
			res.status(422).json({ status: 422, success: false, message: 'Invalid email or password' });
		}

	} catch (err) {
		res.status(422).json({ status: 422, success: false, message: 'Invalid email or password' });

	}

	// try {
	// 	const userValid = await user.findOne({email:email});

	// 	 if(userValid){

	// 		 const isMatch = await bcrypt.compare(password,userValid.password);

	// 		 if(!isMatch){
	// 			 res.status(422).json({ status:422})
	// 		 }else{

	// 			 res.status(200).json({status:200})
	// 		 }
	// 	 }

	//  } catch (error) {
	// 	 res.status(401).json(error);

	//  }
});



module.exports = router;