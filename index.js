const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const ProductsRoute = require("./Routes/products");
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://lavanyareddy:<password>@cluster0.zoh8iig.mongodb.net/?retryWrites=true&w=majority" , ()=>
console.log("connect to DB")
)

app.use('/'  ,ProductsRoute);

app.listen(3000, ()=>console.log("Server is running on port 3000!!!"))