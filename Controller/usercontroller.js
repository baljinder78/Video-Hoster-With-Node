const express = require('express');

const router=express.Router();
const app = express();
const User=require("../models/User"); 
const Bodyparser = require('body-parser');

app.use(Bodyparser.json());


router.post("/register",(req, res) => {
  const user = new User({
    userId: req.body.userId,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  user.save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
       });
})

router.post("/login",async (req,res)=>
{
  // const user=new User(
  //   {
  //     userId:req.body.userId,
  //     password:req.body.password
  //   }
  // )

  const usertoreturn = await User.findOne({ userId: req.body.userId },{userId:1,password:1});
  console.log(usertoreturn);
  res.json(usertoreturn);
})

router.get("/",async (req,res)=>{
  const user= await User.find()
  res.json(user);
})

module.exports=router;