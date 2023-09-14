const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const lib = require('./src/Utils/connectorHeader');

/**
 * USE REDIRECT
 */
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * @Route /api/v1/ftcheck/handshakeID/tokenID/connectorToken
 * Check Connection JWT
 */
app.get('/api/v1/ftcheck/:handshake/:token/:ctoken', async (req,res)=>{
  //CHECK IF CONNECTION ALLOWED ELSE RETURN 500
  const connectorTokenft = req.params.ctoken;
  if(lib.checkConnectionHeader(connectorTokenft)==true){
      try{
          const handshake = req.params.handshake;
          const jwttoken = req.params.token;      
          const connectorToken=lib.getConnectionHeader();
          const customConfig = {
            headers: new Headers({
            'Content-Type': 'application/json',
            })            
          };
          const response = await axios.post(
            `http://localhost/backend/API/CheckJWT.php`,
            JSON.stringify({ 
              HANDSHAKE: handshake, 
              JWTToken: jwttoken, 
              XFRC: connectorToken }),
            customConfig);
          //QUERY SUCCESSFUL
          if(response.status==200){
            const d = response.data;
            (lib.checkConnectionHeader(d.XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'});   
          }else{
            res.status(500).json({error:'Internal Server Error'});
          }
      }catch(error){
          res.status(500).json({error:'Internal Server Error'});
      }
  }else{
      res.status(500).json({error:'Internal Server Error'});
  }
   
})

/**
 * @Route /api/v1/ftcreate/tokenID
 * Create Connector JWT
 */
app.get('/api/v1/ftcreate/:token/:ctoken', async (req,res)=>{
  //CHECK IF CONNECTION ALLOWED ELSE RETURN 500
  const connectorTokenft = req.params.ctoken;
  if(lib.checkConnectionHeader(connectorTokenft)==true){
      try{
          const jwttoken = req.params.token;
          const connectorToken=lib.getConnectionHeader();
          const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
          };
          const response = await axios.post(
            `http://localhost/backend/API/CreateJWT.php`,
            JSON.stringify({ 
              JWTToken: jwttoken, 
              XFRC: connectorToken }),
            customConfig);
            //QUERY SUCCESSFUL
          if(response.status==200){
          const d = response.data;
            (lib.checkConnectionHeader(d[0].XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'});   
          }else{
            res.status(500).json({error:'Internal Server Error'});
          }
      }catch(error){
          res.status(500).json({error:'Internal Server Error'});
      }
  }else{
      res.status(500).json({error:'Internal Server Error'});
  }
   
})

/**
 * @Route /api/v1/shKey/tokenID
 * Create SharedKey -ENCRYPTION FORMAT PKCS1
 */
app.get('/api/v1/shKey/:token/:ctoken', async (req,res)=>{
  //CHECK IF CONNECTION ALLOWED ELSE RETURN 500
  const connectorTokenft = req.params.ctoken;
  if(lib.checkConnectionHeader(connectorTokenft)==true){
      try{
          const shkey = req.params.token;
          const connectorToken=lib.getConnectionHeader();
          const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
          };
          const response = await axios.post(
            `http://localhost/backend/API/CreateShKey.php`,
            JSON.stringify({ 
              PubToken: shkey, 
              XFRC: connectorToken }),
            customConfig);
            //QUERY SUCCESSFUL
          if(response.status==200){
          const d = response.data; 
          console.log(response.status);  
            (lib.checkConnectionHeader(d[0].XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'}); 
          }else{
            res.status(500).json({error:'Internal Server Error'});
          }
      }catch(error){
          res.status(500).json({error:'Internal Server Error'});
      }
  }else{
      res.status(500).json({error:'Internal Server Error'});
  }
   
})

/**
 * @Route /api/v1/signup/JWTToken/ConnectorToken
 * Create SharedKey -ENCRYPTION FORMAT PKCS1
 */
app.post('/api/v1/signup/:ctoken', async (req,res)=>{
  //CHECK IF CONNECTION ALLOWED ELSE RETURN 500
  const connectorTokenft = req.params.ctoken;
  
  if(lib.checkConnectionHeader(connectorTokenft)==true){
    const EncData = req.body;
    //console.log(EncData);
      try{
          const connectorToken=lib.getConnectionHeader();
          const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
          };
          const response = await axios.post(
            `http://localhost/backend/API/Signup.php`,
            JSON.stringify({ 
              URD: EncData, 
              XFRC: connectorToken }),
            customConfig);
            //QUERY SUCCESSFUL
          if(response.status==200){
          const d = response.data; 
          console.log(response.data);  
            //(lib.checkConnectionHeader(d[0].XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'}); 
          }else{
            //res.status(500).json({error:'Internal Server Error'});
          }
      }catch(error){
          res.status(500).json({error:'Internal Server Error'});
      }
  }else{
      res.status(500).json({error:'Internal Server Error'});
  }
   
  
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);   
});