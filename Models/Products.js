const mongoose = require("mongoose");

const productDetails = new mongoose.Schema({
      
    Product_id:{type:String},
    Product_type:{type:String}, 
    Product_name:{type:String}, 
    Product_price:{type:Number}, 
    Available_quantity:{type:Number}

})

const productsData = mongoose.model('products' , productDetails);
module.exports = productsData;