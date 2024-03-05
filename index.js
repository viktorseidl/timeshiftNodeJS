const express = require('express'); 
const cors = require('cors');
const app = express();
const lib = require('./src/Utils/connectorHeader'); 
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
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 *  START   WEB-PANEL ROUTES
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 ------------------------------------------------------------------------------------------------------------*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * IMPORTS */  
const TeamPageRoutes=require('./src/routes/TeamPage');   
const UTerminalScreenRoutes=require('./src/routes/UTerminalScreen'); 
const SignupNewUnit=require('./src/routes/SignupNewUnit'); 
const Encryption=require('./src/routes/Encryption/EncryptionRouter');  
const UnitActivation= require('./src/routes/UnitActivation/UnitActivationRouter');
const Profile= require('./src/routes/ProfileRoutes/ProfileRouter');
const Widgets= require('./src/routes/DashboardRoutes/Widgets');
const Login= require('./src/routes/WebLogin/LoginRouter');
const AdminRouter= require('./src/routes/AdminPanel/AdminRouter');
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * ROUTES */ 
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
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 *  START   ANDROID/IOS APP ROUTES
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 ------------------------------------------------------------------------------------------------------------*/
 /* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * IMPORTS */
const AppNormalTerminalRoutes=require('./src/routes/AppNormalTerminal/AppNormalTerminalRoutes'); 
 /* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * ROUTES */
app.use('/api/v1/app', AppNormalTerminalRoutes);
 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT+5}`);   
});