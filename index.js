const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const lib = require('./src/Utils/connectorHeader');
const Domaine="https://itsnando.com"
const PORT = 3000;
/**
 * IMPORT ROUTES
 */
const AdminStandortRoutes=require('./src/routes/AdminStandort');
const AdminMitarbeiterRoutes=require('./src/routes/AdminMitarbeiter');
const TimetrackingRoutes=require('./src/routes/MitarbeiterTimeTracking');
const UnitPanelLogin=require('./src/routes/UnitPanelLogin');
const ActivateUnit=require('./src/routes/ActivateUnit');
const SignupNewUnit=require('./src/routes/SignupNewUnit');
const EncryptionContext=require('./src/routes/EncryptionContext');

/**
 * USE REDIRECT
 */
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', 'localhost'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
  next();
});
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }))

/**
 * ROUTE HANDLING
 */
app.use('/api/v1/encrypt', EncryptionContext);
app.use('/api/v1/signup', SignupNewUnit);
app.use('/api/v1/activate', ActivateUnit);
app.use('/api/v1/ulogincontroller', UnitPanelLogin);
app.use('/api/v1/ucontrol/apanel/standorte', AdminStandortRoutes);
app.use('/api/v1/ucontrol/apanel/mitarbeiter', AdminMitarbeiterRoutes);
app.use('/api/v1/ucontrol/timetracking', TimetrackingRoutes);
app.use('/test/',async (req,res)=>{
  res.send('OK')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);   
});