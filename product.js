const express = require('express');
const router = express.Router();

const products = [];

id = 0;

router.get('/products',(req,res)=>{
    return res.json(products);
})
router.get('/products/:id',(req,res)=>{
    const product = products.find(val=>val.id===Number(req.params.id));
    return res.json(product);
})
router.post('/products',(req,res)=>{
    products.push({
        id:id++,
        name:req.body.name,
        sku:req.body.sku,
        brand:req.body.brand,
        category:req.body.category,
        manufacturer:req.body.manufacturer,
        hsnCode:req.body.hsnCode,
        weight:req.body.weight,
        dimension:req.body.dimension
    })
    return res.json({message:'created'})
})

router.patch('products/:id',(req,res)=>{
    const product = products.find(val=>val.id===Number(req.params.id))
    product.name = req.body.name;
    product.sku=req.body.sku;
    product.brand=req.body.brand;
    product.category=req.body.category;
    product.manufacturer=req.body.manufacturer;
    product.hsnCode=req.body.hsnCode;
    product.weight=req.body.weight;
    product.dimension=req.body.dimension;
    return res.json({message:'updated'});
})
router.delete('products/:id',(req,res)=>{
    const product = products.find(val=>val.id===Number(req.params.id))
    products.splice(product,1);
    return res.json({message:'deleted'});
})
module.exports = router;