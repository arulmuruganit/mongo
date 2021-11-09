const mongoose =require('mongoose');

const ConnectDB =async ()=>{
   await mongoose.connect("mongodb+srv://arulmurugan:23sep01@cluster0.6cvbq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports=ConnectDB;