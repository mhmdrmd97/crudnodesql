const { addProductsToDb } = require("../../Models/Product");

exports.getAddProductPage = (req,res,next)=>{
    
    const viewsData ={
        pageTitle: 'Product Page - Products List'
    }

    res.render('product',viewsData)
 }

 exports.postAddProduct = async (req,res,next)=>{

   await addProductsToDb(req);
    res.redirect('/');
     }