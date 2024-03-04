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
const AdminAbteilungRoutes=require('./src/routes/AdminAbteilung');
const AdminBereicheRoutes=require('./src/routes/AdminBereiche');
const AdminVertragRoutes=require('./src/routes/AdminVertrag');
const AdminTeamRoutes=require('./src/routes/AdminTeam');
const AdminSettingsRoutes=require('./src/routes/AdminSettings');
const TeamPageRoutes=require('./src/routes/TeamPage');
const AdminTerminalRoutes=require('./src/routes/AdminTerminal');
const AdminGruppeRoutes=require('./src/routes/AdminGruppe');
const AdminStandortRoutes=require('./src/routes/AdminStandort');
const AdminMitarbeiterRoutes=require('./src/routes/AdminMitarbeiter');
const ProfileHeadRoutes=require('./src/routes/ProfileHead');
const UDashboardRoutes=require('./src/routes/UDashboard');
const UTerminalScreenRoutes=require('./src/routes/UTerminalScreen'); 
const TimetrackingRoutes=require('./src/routes/MitarbeiterTimeTracking');
const UnitPanelLogin=require('./src/routes/UnitPanelLogin');
const ActivateUnit=require('./src/routes/ActivateUnit');
const SignupNewUnit=require('./src/routes/SignupNewUnit');
const EncryptionContext=require('./src/routes/EncryptionContext');
/**
 * IMPORT DASHBOARD ROUTES 
 */
const Widgets= require('./src/routes/DashboardRoutes/Widgets');
 /*--------------------------------------------------------------------------------
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
 *---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
 * ROUTE HANDLING
 *---------------------------------------------------------------------------------*/
app.use('/api/v1/encrypt', EncryptionContext);
app.use('/api/v1/signup', SignupNewUnit);
app.use('/api/v1/activate', ActivateUnit); 
app.use('/api/v1/ulogincontroller', UnitPanelLogin);
app.use('/api/v1/ucontrol/apanel/standorte', AdminStandortRoutes);
app.use('/api/v1/ucontrol/apanel/abteilung', AdminAbteilungRoutes);
app.use('/api/v1/ucontrol/apanel/team', AdminTeamRoutes);
app.use('/api/v1/ucontrol/apanel/setting', AdminSettingsRoutes);
app.use('/teampage', TeamPageRoutes);
app.use('/api/v1/ucontrol/apanel/terminal', AdminTerminalRoutes);
app.use('/api/v1/ucontrol/apanel/gruppe', AdminGruppeRoutes);
app.use('/api/v1/ucontrol/apanel/bereiche', AdminBereicheRoutes);
app.use('/api/v1/ucontrol/apanel/vertrag', AdminVertragRoutes);
app.use('/api/v1/ucontrol/apanel/mitarbeiter', AdminMitarbeiterRoutes);
app.use('/api/v1/ucontrol/dashboard', UDashboardRoutes);
app.use('/api/v1/web/terminal', UTerminalScreenRoutes); 
app.use('/api/v1/ucontrol/timetracking', TimetrackingRoutes);
app.use('/api/v1/ucontrol/profile', ProfileHeadRoutes);
app.use('/api/v1/ucontrol/profile', ProfileHeadRoutes);
/**
 * DASHBOARD ROUTES
 */
app.use('/api/v1/dashboard', Widgets);
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