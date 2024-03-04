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
 * IMPORT SUB-ROUTES
 */
const Activate=require('./Activate/Activate');           
const RootPass=require('./RootPass/ActivateRootPass');           
/**
 * SUB-ROUTING
 */     
router.use('/route/activation', Activate);     
router.use('/route/verify', RootPass);     
  
module.exports = router;