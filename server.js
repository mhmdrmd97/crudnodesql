const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRoutes = require('./routes/admin')
const homeRoutes = require('./routes/home')
const rootDir = require('./utils/path')

//initializing app
const app = express();

//setting engine
app.set('view engine', 'ejs');
app.set('views', 'client');


//static files
app.use(express.static(path.join(rootDir,'public')))
app.use(express.static(path.join(rootDir,'node_modules', 'bootstrap', 'dist','css')))

//security
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

//routes
app.use('/products',adminRoutes);
app.use(homeRoutes);
app.use((req,res,next)=>{
    res.status(404).render('404')
})

//server
app.listen(5000,()=>{
    console.log('server running on port 5000');
})
