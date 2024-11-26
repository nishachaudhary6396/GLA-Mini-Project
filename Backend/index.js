const port = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { log } = require("console");

app.use(express.json());
app.use(cors());


//database connection  with mongoDB
mongoose.connect("mongodb+srv://gunjanpandey91221:kyxMX47849UwLsJp@cluster0.rs2a5.mongodb.net/Ecommerce")




//API Creation
app.get("/",(req,res)=>{
    res.send("express app is running")
})


const fs = require('fs');
const uploadDir = './upload/images';


if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

// IMage storange engine
const storage = multer.diskStorage({
    destination :'./upload/images',      //correct
    filename:(req ,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

console.log(storage);
const upload = multer({storage:storage})
// creating upload endpoint for images
app.use('/images',express.static('upload/images'))    // html se

// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`https://localhost:${port}/images/${req.file.filename}`

//     })
// })
console.log(upload);

app.post("/upload", upload.single('pro'), (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).json({ success: 0, message: "No file uploaded" });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});


console.log(upload);







// app.post("/upload", upload.single('product'),(req, res) => {
//     console.log(req.file); // Yeh file object ko log karega
//     if (!req.file) {
//         return res.status(400).json({ success: 0, message: "No file uploaded" });
//     }
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`
//     });
// });

// schema for creating products
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        // required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    availabel:{
        type:Boolean,
        default:true
    }
})

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = product.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        // image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save(); // product will be save in db
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
    
})


//API FOR DELETING PRODUCTS
app.post('/removeproduct',async (req,res) =>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})


//CREATING API FOR GETTING ALL PRODUCTS
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})


app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port" + port);
        
    }else{
        console.log("error :" +error);
        
    }
})