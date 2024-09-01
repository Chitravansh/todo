const mongoose = require("mongoose");

const conn = async(req,res) =>{
  try{
    await mongoose.connect("mongodb+srv://chitravanshmohandevelops:i9NWZLxK5X8Kr0ow@cluster0.est0t.mongodb.net/")
     console.log("Connected to MongoDB");

  } catch(error){
    // res.status(404).json({
    //     status: "Not connected ",
    // });
    console.error("Connection failed", error);
  }
};
conn();