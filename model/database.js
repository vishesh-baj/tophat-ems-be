const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://tophat:tophat@cluster0.5bvgqom.mongodb.net/ems?retryWrites=true&w=majority",(error,result)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Database Connected")
    }
})