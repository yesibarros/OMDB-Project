const FavoritesModel = require("../models/Favorites");
const UserModel= require('../models/User')
const router = require("express").Router();




router.post("/:id", (req, res) => {
  const id = req.params.id
  console.log("IDDDBACKK", id)
  // UserModel.findById(id)
  // .then((user)=> {
    
    FavoritesModel.create(req.body)

    .then((film)=> {

      // user.favorites.push(film)
      // return user.save()
      UserModel.findOneAndUpdate({_id : id}, {$push:{
        favorites: film
      }} )

    })
    .then((user) => console.log(user))
    .then((user)=>{
      res.status(201).send(user.favorites)
    })
  // })
  // user.populate("favorites").execPopulate()
})


  // router.delete("/:id", (req, res) => {
  //   const body = req.body
  //   const id = req.params.id
  //   FavoritesModel.findByIdAndDelete(id, body)
  //   .then((favorite)=>res.status(201).send(favorite))
  //   .catch (()=> res.sendStatus(400))
  // });




  router.get("/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findById(id)
    .populate('favorites')
    .then(user=>{
      res.send(user.favorites);
    })
    .catch(err=>{
      res.status(404).send(err)
    })
  })
  
  
 
module.exports = router;
