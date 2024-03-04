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
router.use('/normal/terminal', Login);  
//router.use('extended/terminal', Login);  



/**
 * LOGIN FORMEN
 */
//const Pin=require('./Login/Logforms/Pin'); 
/**
 * LOGIN FORMEN ROUTES
 * PIN : normal/terminal/pin/:typ/:ctoken
 */
//router.use('normal/terminal', Pin);  


/**
 * ZU ERGÄNZEN BEI LOGIN FORMEN
 * NFC LOGIN 
 * QR-CODE LOGIN
 * BLUETHOOT LOGIN
 * CREDETIALS LOGIN
 * 
 * SOLLTE NUR EIN USER AUF DAS GERÄT VERLINKT SEIN; KANN LOGIN AUSGESETZT WERDEN: SOMIT ERSTE ABFRAGE ANCH VERIFIZIERUNG DES GERÄTS GILT IMMER DIE ANZAHL DER   
 * VERLINKTEN PERSONEN FÜR DEN TERMINAL ABZUFRAGEN
 * 
 * DANACH DEN GERÄTEZUSTAND; OB DAS GERÄT DEAKTIVIERT WURDE ODER AKTIV IST
 * 
 * NACH LOGIN KOMMT DASHBOARD
 * 
 * DASHBOARD ODER HAUPTBEREICH 
 * GERÄTE ANSICHT IMMER GANZ OBEN
 * BEINHALTET LOGO TIMESHIFT + NAME
 * DEVICENAME => GERÄTENAME
 * GERÄTEKENNUNG => STRING
 * DEVICE-STATUS OB ENABLED ODER DISABLED
 * 
 * 
 */

module.exports = router;