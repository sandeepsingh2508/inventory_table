const mongoose=require('mongoose')

const inventorySchema= new mongoose.Schema({
    userid:{
        type:String ,
        unique: true,
        required:[true,"please enter UserId"],
    },
    name:{
        type:String,
        required:[true,"please enter user name"]
    },
    description:{
        type:String
    },
    accountstatus:{
        type:String
    },
    creationdate:{
        type:Date,
        default:Date.now
    }


})

module.exports=mongoose.model('Data',inventorySchema)