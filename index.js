const express = require('express'); 
const cors = require('cors');
const app = express();
const lib = require('./src/Utils/connectorHeader');
const Domaine=lib.getDomain();
const PORT = 3000;
app.use(cors())
 




/**
 * USE REDIRECT
 */
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'POST, HEAD, GET, OPTIONS');
  next();
});  
/**-----------------------------------------------------------------------------------------------------------
 * 
 *  START---WEB-PANEL ROUTES
 * 
 ------------------------------------------------------------------------------------------------------------*/
 /*
 * IMPORTS
 *-----------------------------------------------------------------------------*/  
const TeamPageRoutes=require('./src/routes/TeamPage');   
const UTerminalScreenRoutes=require('./src/routes/UTerminalScreen');  
const ActivateUnit=require('./src/routes/ActivateUnit');
const SignupNewUnit=require('./src/routes/SignupNewUnit');
const EncryptionContext=require('./src/routes/EncryptionContext'); 
const Encryption=require('./src/routes/Encryption/EncryptionRouter'); 


const UnitActivation= require('./src/routes/UnitActivation/UnitActivationRouter');
const Profile= require('./src/routes/ProfileRoutes/ProfileRouter');
const Widgets= require('./src/routes/DashboardRoutes/Widgets');
const Login= require('./src/routes/WebLogin/LoginRouter');
const AdminRouter= require('./src/routes/AdminPanel/AdminRouter');
 /*--------------------------------------------------------------------------------
  * WEB-PANEL ROUTES
  * /api/v1/ 
  *    SUBROUTES
  *      - DASHBOARD: 
  *        -WIDGETS
  *           -> dashboard/urlaub/widget/:typ/:ctoken
  *           -> dashboard/krank/widget/:typ/:ctoken
  *           -> dashboard/tage/widget/:typ/:ctoken
  *           -> dashboard/zeitkonto/widget/:typ/:ctoken -- TODO
  *        -TIMETRACKING
  *           -> dashboard/track/timetouch/:typ/:ctoken
  *      - ADMIN VERWALTUNG: 
  *        -STANDORTE
  *           -> controller/route/standort/:typ/:ctoken
  *           -> controller/route/standort/:typ/:stid/:ctoken
  *        -ABTEILUNGEN
  *           -> controller/route/abteilung/:typ/:stid/:ctoken
  *        -BEREICHE
  *           -> controller/route/bereiche/:typ/:stid/:ctoken
  *        -GRUPPEN
  *           -> controller/route/gruppen/:typ/:stid/:ctoken
  *        -TEAMS
  *           -> controller/route/teams/:typ/:stid/:ctoken
  *        -MITARBEITER
  *           -> controller/route/mitarbeiter/:typ/:stid/:ctoken
  *        -VETRÄGE
  *           -> controller/route/vertrag/:typ/:stid/:ctoken
  *        -TERMINAL
  *           -> controller/route/terminals/:typ/:stid/:ctoken
  *        -SETTINGS
  *           -> controller/route/einstellungen/:typ/:stid/:ctoken
  *      - PROFILE: 
  *           -> profile/route/header/:typ/:ctoken
  *      - WEBLOGIN: 
  *        -UNIT LOGIN 
  *           -> weblogin/route/unit/login/:uapi/:ltoken/:ctoken
  *           -> weblogin/route/unit/cryptlh/:ctoken 
  *      - UNIT ACTIVATION: 
  *        -ACTIVATE 
  *           -> start/route/activation/:token/:typ/:ctoken 
  *           -> start/route/verify/:token/:typ/:ctoken 
  *      - ENCRYPTION: 
  *        -JWTCHECK 
  *           -> keygen/route/check/:handshake/:token/:ctoken 
  *        -JWTCREATE 
  *           -> keygen/route/create/:token/:ctoken
  *        -RSA SHARED KEY 
  *           -> keygen/route/shared/:token/:ctoken 
  *      - ZEITERFASSUNG: -- TODO
  *      - URLAUBPLANNER: -- TODO
  *      - TICKETING: -- TODO
  *      - WIKI: -- TODO 
  *            
 *---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
 * ROUTE HANDLING
 *---------------------------------------------------------------------------------*/ 
app.use('/api/v1/keygen', Encryption);
app.use('/api/v1/signup', SignupNewUnit);  
app.use('/api/v1/start', UnitActivation);  
app.use('/teampage', TeamPageRoutes); 
app.use('/api/v1/web/terminal', UTerminalScreenRoutes);    
app.use('/api/v1/weblogin', Login); //-------------------------------------------> WEBLOGIN
app.use('/api/v1/dashboard', Widgets); //-------------------------------------> DASHBOARD
app.use('/api/v1/profile', Profile); //---------------------------------------> PROFILE
app.use('/api/v1/controller', AdminRouter); //--------------------------------> ADMIN
/**-----------------------------------------------------------------------------------------------------------
 * 
 *  END---WEB-PANEL ROUTES
 * 
 ------------------------------------------------------------------------------------------------------------*/ 
/**-----------------------------------------------------------------------------------------------------------
 * 
 *  START---ANDROID/IOS APP ROUTES
 * 
 ------------------------------------------------------------------------------------------------------------*/
 /**
 * IMPORT APP TERMINAL ROUTES
 */
const AppNormalTerminalRoutes=require('./src/routes/AppNormalTerminal/AppNormalTerminalRoutes'); 
 /**
  * APP NORMAL TERMINAL ROUTES
  * /api/v1/app/
  *    SUBROUTES
  *      - NORMAL TERMINAL:
  *        -> normal/terminal/
  *            SUBROUTES
  *              - LOGIN
  *              -> login/:typ/:ctoken
  *              - LOGIN FORMS
  *                -PIN
  *                  -> pin/:typ/:ctoken
  *                  -> nfc/:typ/:ctoken
  *                  -> bluethoot/:typ/:ctoken
  *                  -> qrcode/:typ/:ctoken
  *                  -> credentials/:typ/:ctoken
 */
app.use('/api/v1/app', AppNormalTerminalRoutes);
/**-----------------------------------------------------------------------------------------------------------
 * 
 *  END---ANDROID/IOS APP ROUTES
 * 
 ------------------------------------------------------------------------------------------------------------*/
 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT+5}`);   
});