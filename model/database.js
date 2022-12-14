const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,(error,result)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Database Connected")
    }
})