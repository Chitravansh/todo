const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//SIGN UP
router.post("/register",async(req,res)=>{
    try{
         const {email,username,password} = req.body;
         const hashpassword = bcrypt.hashSync(password);
         const user = new User({email, username, password : hashpassword });
         await user.save().then(()=>
            res.status(200).json({user: user}) 
        );
    }catch(error){
        console.log(error); //This is used to show error details in the terminal
        res.status(400).json({message: "user already exists"});

    }
});

//SIGN IN

router.post("/signin",async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
             res.status(400).json({message: "Sign Up First"});
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password, 
            user.password
        );

        if(!isPasswordCorrect){
           res.status(400).json({message: "Password is Not Correct"});
        }

        const{password,...others} = user._doc;
        res.status(200).json({others});

    }catch(error){
        console.log(error); //This is used to show error details in the terminal
        res.status(400).json({message: "sign in failed"});

    }
});

module.exports = router;