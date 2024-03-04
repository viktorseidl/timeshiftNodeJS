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
const AdminVertragRoutes=require('./src/routes/AdminVertrag');
const AdminTeamRoutes=require('./src/routes/AdminTeam');
const AdminSettingsRoutes=require('./src/routes/AdminSettings');
const TeamPageRoutes=require('./src/routes/TeamPage');
const AdminTerminalRoutes=require('./src/routes/AdminTerminal'); 
const AdminMitarbeiterRoutes=require('./src/routes/AdminMitarbeiter');
const ProfileHeadRoutes=require('./src/routes/ProfileHead');
const UDashboardRoutes=require('./src/routes/UDashboard');
const UTerminalScreenRoutes=require('./src/routes/UTerminalScreen'); 
const TimetrackingRoutes=require('./src/routes/MitarbeiterTimeTracking');
const UnitPanelLogin=require('./src/routes/UnitPanelLogin');
const ActivateUnit=require('./src/routes/ActivateUnit');
const SignupNewUnit=require('./src/routes/SignupNewUnit');
const EncryptionContext=require('./src/routes/EncryptionContext'); 
const Widgets= require('./src/routes/DashboardRoutes/Widgets');
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
  *        -MITARBEITER
  *        -VETRÄGE
  *        -TERMINAL
  *      - PROFILE: 
  *        -PROFILE -- TODO
  *        -PROFILE PERSONALAKTE -- TODO
  *        -PROFILE MESSAGES -- TODO
  *      - ZEITERFASSUNG: -- TODO
  *      - URLAUBPLANNER: -- TODO
  *      - TICKETING: -- TODO
  *      - WIKI: -- TODO
  *      - SETTINGS: -- TODO
  *            
 *---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
 * ROUTE HANDLING
 *---------------------------------------------------------------------------------*/
app.use('/api/v1/encrypt', EncryptionContext);
app.use('/api/v1/signup', SignupNewUnit);
app.use('/api/v1/activate', ActivateUnit); 
app.use('/api/v1/ulogincontroller', UnitPanelLogin);  
app.use('/api/v1/ucontrol/apanel/team', AdminTeamRoutes);
app.use('/api/v1/ucontrol/apanel/setting', AdminSettingsRoutes);
app.use('/teampage', TeamPageRoutes);
app.use('/api/v1/ucontrol/apanel/terminal', AdminTerminalRoutes); 
app.use('/api/v1/ucontrol/apanel/vertrag', AdminVertragRoutes);
app.use('/api/v1/ucontrol/apanel/mitarbeiter', AdminMitarbeiterRoutes);
app.use('/api/v1/ucontrol/dashboard', UDashboardRoutes);
app.use('/api/v1/web/terminal', UTerminalScreenRoutes); 
app.use('/api/v1/ucontrol/timetracking', TimetrackingRoutes);  
app.use('/api/v1/ucontrol/profile', ProfileHeadRoutes); //-------------------->PROFILE
app.use('/api/v1/ucontrol/profile', ProfileHeadRoutes); //-------------------->PROFILE
app.use('/api/v1/', Widgets); //----------------------------------------------> DASHBOARD
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