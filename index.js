const express = require('express');
const ConnectDB=require('./connection');
const user=require('./user');
const app = express();
app.use(express.json());

app.get('/select',async (req,res)=>{
    const data = await user.find();
    res.json(data);
});

app.get('/insert',async (req,res)=>{
    const data = await user.create({
        name:"Arul",
        email:"arul@gmail.com",
        phone:9474767848
    })
    res.json(data);
});

app.put('/update/:id',async(req,res)=>{
    const data = await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.json(data);
});

app.delete('/delete/:id',async(req,res)=>{
    const data = await user.findByIdAndDelete(req.params.id,{$set:req.body});
    res.json(data);
});
const PORT = process.env.PORT || 4321;
app.listen(PORT,()=>{
    console.log("server started");
    ConnectDB().then(()=>{
console.log("DB connected");
    })
    .catch(()=>{
console.log("error");
    })
})