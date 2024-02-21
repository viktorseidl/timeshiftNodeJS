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

const UrlaubWidget=require('./WidgetRoutes/UrlaubWidget');
const KrankContainerWidget=require('./WidgetRoutes/KrankContainerWidget');
const TageContainerWidget=require('./WidgetRoutes/TageContainerWidget');
const MitarbeiterWidget=require('./WidgetRoutes/MitarbeiterWidget');
const TimeTouch=require('./TimeTrackingRoutes/TimeTracking');
router.use('/widget', UrlaubWidget);  
router.use('/krank', KrankContainerWidget);  
router.use('/tage', TageContainerWidget);  
router.use('/mitarbeiter', MitarbeiterWidget);  
router.use('/track', TimeTouch);  
  
module.exports = router;