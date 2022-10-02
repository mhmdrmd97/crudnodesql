const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path')
const {db} = require('../utils/db')

 exports.addProductsToDb =async (req)=>{    
    const {title} = req.body;
    const sqlInsert = "INSERT INTO products_tb (title) VALUES (?)";
    await db.query(sqlInsert,[title]).then((result)=>result[0]).catch(err=>console.log('error:',err));
}

exports.getProductsFromDb = async ()=>{  
    const sqlInsert = "SELECT * FROM products_tb";
    const products = await db.query(sqlInsert).then((result)=>result[0])

    return products;
}
