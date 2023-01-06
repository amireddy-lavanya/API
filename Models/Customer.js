const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

    customer_id:{type:String},
     customer_name:{type:String},
     email:{type:String , unique:true},
     balance:{type:Number}
})

const customerData = mongoose.model("customer" ,customerSchema)

module.exports= customerData;