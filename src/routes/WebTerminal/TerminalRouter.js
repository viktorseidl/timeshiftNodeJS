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
const Terminal=require('./Terminal/Terminal');           
const RootPass=require('./RootPass/ActivateRootPass');           
/**
 * SUB-ROUTING
 */     
router.use('/route/terminal', Terminal);     
//router.use('/route/verify', RootPass);     
  
module.exports = router;