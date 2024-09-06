const mongoose = require("mongoose");

const conn = async(req,res) =>{
  try{
    await mongoose.connect("MONGODB_URL")
     console.log("Connected to MongoDB");

  } catch(error){
    // res.status(404).json({
    //     status: "Not connected ",
    // });
    console.error("Connection failed", error);
  }
};
conn();
