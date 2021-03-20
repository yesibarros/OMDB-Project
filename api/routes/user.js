const router = require("express").Router();
const passport = require("passport")
const UserModel= require('../models/User')



router.get("/", (req,res,next)=>{
   
    UserModel.find()
    .then((data)=> res.send(data))
    .catch(next)
})


router.post("/register", (req,res)=>{

    const body= req.body
    console.log(body)
    UserModel.create(body)
    .then((data)=> res.status(201).send(data))
    .catch((err)=>{
      res.send(err)
    })
})



  router.post("/login", passport.authenticate("local"), (req, res) => {
  
   console.log("ESTOY EN LOGIN", req.user)

   UserModel.findById(req.user._id)
   .populate("favorites")
   .then((user)=>res.send(user))
   
  });
  
  router.post("/logout", (req, res) => {
    console.log("me fuiiii")

    req.logOut();
    res.sendStatus(200);
  });
  
  router.get("/secret", (req, res) => {

    
    
    if (req.user) {
      res.send("socias.jpg");
    } else {
      res.sendStatus(401);
    }
  });
  
  
      
   router.get("/me", (req, res) => {
       if (req.user) return res.send(req.user); //req.user lo da passport.
        res.sendStatus(401);
      });  
      
    
      
      
      
    

module.exports = router;