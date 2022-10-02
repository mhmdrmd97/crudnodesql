const { getProductsFromDb } = require("../../Models/Product");



exports.getHomePage = async (req,res,next)=>{
    const viewsData ={
        products: await getProductsFromDb(),
        pageTitle: 'Home Page - Products List'
    }

    res.render('homePage',viewsData);
 }