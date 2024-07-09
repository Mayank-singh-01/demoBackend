require('dotenv').config()
const express = require("express");
const PORT = 5001;
 const App = express();

 App.get("/",(req,res)=>{
   res.send("hay mayank this side");
 })

 App.listen(process.env.PORT,()=>{
   console.log(`server started at port no ${PORT}`);
 })