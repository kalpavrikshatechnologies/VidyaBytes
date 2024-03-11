const express = require('express')
const router = new express.Router;
const user = require("../models/user.js");
var bcrypt = require("bcryptjs");

const nodemailer = require("nodemailer");
var Mailgen = require('mailgen');
const jwt = require("jsonwebtoken");

const keysecret = 'dghvchdddsbcvhdsvggvhchd25656'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'kalpavrikshatechnologies@gmail.com',
        pass: 'tzwd msla yhwo rsym'

    }
})

var mailGenerator = new Mailgen({
    theme: 'default',
    product: {

        name: 'VidyaBytes',
        link: 'http://localhost:5173',
        // Optional product logo
        logo: 'Logo.png'
    }
});

router.post('/signup', async (req, res) => {

    const { name, email, phone, password } = req.body
    try {
        const existUser = await user.findOne({ email });

        if (existUser) {
            res.status(422).json({ status: 422, error: "This Email is Already Exist" })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const userDetail = new user({ email, name, phone, password:hashedPassword })
            await userDetail.save()
            res.status(200).json({ status: 200 });
        }

    } catch (err) {
        res.status(401).json({ status: 401 });

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
            res.status(401).json({ status: 401, success: false, message: 'Invalid email or password' });
        }

    } catch (err) {
        res.status(422).json({ status: 422, success: false, message: 'Invalid email or password' });

    }
});




router.post("/sendpasswordlink", async (req, res) => {
    const { email } = req.body;
    const userfind = await user.findOne({ email: email });



    try {
        if (!userfind) {
            res.status(422).json({ status: 422 })
        } else {




            // token generate for reset password
            const token = jwt.sign({ _id: userfind.id }, keysecret, {
                expiresIn: "1day"
            });

            const setusertoken = await user.findByIdAndUpdate({ _id: userfind.id }, { verifytoken: token }, { new: true });


            if (setusertoken) {

                var emailStruct = {
                    body: {
                        name: ' User',
                        intro: 'Welcome to VidyBytes! We\'re very excited to have you on board.',
                        action: {
                            instructions: 'To get started with VidyBytes, please click here:',
                            button: {
                                color: '#22BC66', // Optional action button color
                                text: 'Confirm your account',
                                link: `http://localhost:5173/updatepass/${userfind.id}/${token}`
                            }
                        },
                        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
                    }
                };

                // Generate an HTML email with the provided contents
                var emailBody = mailGenerator.generate(emailStruct);

                const mailOptions = {
                    from: email,
                    to: 'kalpavrikshatechnologies@gmail.com',
                    subject: "Sending Email For password Reset",
                    text: `This Link Valid For 2 MINUTES http://localhost:5173/updatepass/${userfind.id}/${token}`,
                    html: emailBody
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(401).json({ status: 401, message: "email not send" })
                    } else {
                        console.log("Email sent", info.response);
                        res.status(201).json({ status: 201, message: "Email sent Succsfully" })
                    }
                })

            }
        }
    } catch (error) {
        res.status(401).json({ status: 401, message: "invalid user" })
    }

});


// verify user for forgot password time
router.get("/verify/:id/:token", async (req, res) => {
    const { id, token } = req.params;

    try {
        const validuser = await user.findOne({ _id: id, verifytoken: token });
        const verifyToken = jwt.verify(token, keysecret);
        if (validuser && verifyToken._id) {
            res.status(201).json({ status: 201, validuser })
        } else {
            res.status(422).json({ status: 422, message: "user not exist" })
        }

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});


router.post('/update/:id/:token', async(req, resp) => {
    const { id, token } = req.params;
    const {password} = req.body;

    try {
        const validuser = await user.findOne({_id:id,verifytoken:token});
        const verifyToken = jwt.verify(token,keysecret);
        if(verifyToken){
           
            const hashedPassword = await bcrypt.hash(password, 10);
            const setnewuserpass = await user.findByIdAndUpdate({_id:id},{password:hashedPassword});
                setnewuserpass.save();
                resp.status(201).json({status:201,setnewuserpass})
        }else{
            resp.status(422).json({status:422,setnewuserpass})

        }

    } catch (err) {
        resp.status(401).json({status:401,err})
    }
})



module.exports = router;