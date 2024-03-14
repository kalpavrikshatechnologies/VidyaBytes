const express = require('express')
const router = express.Router()
const multer = require('multer')
const  books= require( '../models/books')
const { StatusCodes } =require( 'http-status-codes')
const Books = require('../models/books')

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, 'images')
  },
  filename: (req, file, cd) => {
    cd(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })
router.post('/upload',upload.single('image'),async (req, res, next) => {
    try {
        await new Books({ ...req.body, filePath:req.file.filename ,fileName:req.file.originalname }).save();
  
       res.status(201).send({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ msg: error })
    }
  })

router.route('/images').get(async (req, res, next) => {
    try {
      const images = await UserImgSchema.find({})
      const image = images[0]
      res.status(StatusCodes.OK).json({ image })
    } catch (error) {
      res.status(500).json({ msg: error })
    }
  })
module.exports = router