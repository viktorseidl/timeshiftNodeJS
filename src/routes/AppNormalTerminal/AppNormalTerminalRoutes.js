const express=require('express');
const router = express.Router();
const IP = require('ip'); 
const lib = require('./../../Utils/connectorHeader'); 
const Domaine=lib.getDomain();
const cors =require('cors'); 
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, HEAD, GET, OPTIONS');
    next();
}); 
/**
 * ACTIVIERUNG
 * IMPORT
 * VERIFY
 */
const Login=require('./Login/Login'); 
/**
 * ACTIVIERUNG
 * IMPORT
 * VERIFY
 * ROUTES
 * ROUTE normal/terminal/login/:typ/:ctoken
 */
router.use('normal/terminal', Login);  
//router.use('extended/terminal', Login);  



/**
 * LOGIN FORMEN
 */
const Pin=require('./Login/Logforms/Pin'); 
/**
 * LOGIN FORMEN ROUTES
 * PIN : normal/terminal/pin/:typ/:ctoken
 */
router.use('normal/terminal', Pin);  

module.exports = router;