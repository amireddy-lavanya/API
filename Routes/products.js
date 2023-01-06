const express = require("express");
const bodyparser=require("body-parser")
const Products =require("../Models/Products");
const Customers = require("../Models/Customer");
const Orders = require("../Models/Orders");
const app = express()
app.use(express.json())
app.use(bodyparser.json())

app.post('/product' , async(req, res)=>{
try{
    const productsData = await Products.create(req.body)
    res.status(200).json(
        productsData
        );
}
catch(e){
    res.status(400).json(
        {message:e.message})
}

})
app.post('/customer' , (req, res)=>{
    const customerData=  Customers.create(req.body);
    res.status(200).json(
     {
         customerData
     }
    )
})

app.post('/orders' , async(req , res)=>{
   try{
          const orderData = await Orders.create(req.body)
          res.status(200).json(orderData);

   }
   catch(e){
    res.status(400).json(
        {
            message:e.message
        }
    )}


})

app.get('/orders/:orderID' , async(req, res)=>{
        const orderID = req.params.order_id; 
    try{
        const particular = await Orders.find({orderID: req.params.order_id}, req.body)
        res.status(200).json(
        { status:"successfull",
        particular}
        )
    }
    catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})
app.get('/product/:productID' , async(req , res)=>{

    const productID = req.params.Product_id;
    try{
        const particular = await Products.find({productID :req.params.Product_id}, req.body)
        res.status(200).json(
            {
                particular
            }
        )
    }
    catch(e){
        res.status(400).json(
            {
                message:e.message
            }
        )
    }
})
    app.get('/customer/customerID' , async(req, res)=>{
          
        try{
            const particular = await Customers.find({customerID:req.params.customer_id})
            
        res.json({particular})
        }
        catch(e){
            {
                message:e.message;
            }
        }
    

})

app.get('/product/productType' , async(req , res)=>{

      const prodouctType = req.params.product_type
      try{
        const particularType = await Products.find({prodouctType : req.params.product_type})
        {
            res.status(200).json(
                particularType
                )
        }
      }
      catch(e){
        message: e.message;
      }
})

app.put('/productName/availableQuantity' , async(req , res)=>{
    try{
        const data = await Products.find({productName:req.params.Product_name}, {availableQuantity:req.params.Available_quantity})
        res.status(200).json(data)
    }
    catch(e){
        message:e.message;
    }
})

app.put("/:email/costOfAnOrder" , async(req, res)=>{

 try{
    const data = await Customers.updateOne({email: req.body.email})
    if(data){
         res.status(200).json(
            {email: req.body.email} ;
         )
    }
 }
 catch(e)
 {
   message : e.message;
 }
})

module.exports =app;