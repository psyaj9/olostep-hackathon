const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const User = require('../Models/User')

/* config multer for file storage */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/") // store the file
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname) // store the file name
    }
})

const upload = multer({storage})

/* -------------------------USER REGISTER-------------------------------------------------------- */
router.post("/register", upload.single('profileImage'), async (req, res) => {
    try {
        /* Take all the info needed from form in client side */
        const {firstName, lastName, email, password} = req.body
        /* get the uploaded file as req.file*/
        const profileImage = req.file
        if (!profileImage){
            return res.status(400).json({msg: "Please upload a profile image"})
        }
        /* the path to the uploaded photo */
        const profileImagePath = profileImage.path
        /* check if user exists in db */
        const existingUser = await User.findOne({email}) // email is is unique
        if (existingUser){
            return res.status(409).json({msg: "User already exists"})
        }
        /* encrypt password */
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        /* create new user  */
        const newUser = new User ({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImagePath,
        }) 
        /* save the new user info */
        await newUser.save()
        /* notify user of success */
        res.status(200).json({msg: "user created successfully", user: newUser})
    }  
      catch (err) {
            console.log(err)
            res.status(500).json({msg: "user not created", error: err.msg})
        }
})

/********************* USER REGISTER ENDS ***********************************************/


/* -------------------USER LOGIN STARTS------------------------------------------------------ */
router.post("/login", async (req, res) => {
    try {
        /* get the email and password from the form */
        const {email, password} = req.body
        /* check if user exists in db */
        const user = await User.findOne({email})
        if (!user){
            return res.status(409).json({msg: "can't find the user"})
        }
        /* check if password is correct */
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({msg: "invalid email/password"})
        }
        /* -----------------get jwt token------------------------------- */
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        delete user.password

        res.status(200).json({token, user})
        /* if user exists and password is correct, return the user info */
    }
    catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
    /* -------------------USER LOGIN ENDS------------------------------------------------------ */
})

module.exports = router