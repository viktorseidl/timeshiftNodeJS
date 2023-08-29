const express = require('express');
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

/**
 * @Route /api/v1/ftcheck/handshakeID/tokenID
 * Check Connection JWT
 */
app.get('/api/v1/ftcheck/:handshake/:token', async (req,res)=>{
   
  try{
    const handshake = req.params.handshake;
    const jwttoken = req.params.token;
    const connectorToken=lib.getConnectionHeader();
    const customConfig = {
      headers: new Headers({
      'Content-Type': 'application/json',
      })
      
    };
  const response = await axios.post(`http://localhost/backend/API/CheckJWT.php`,JSON.stringify({ HANDSHAKE: handshake, JWTToken: jwttoken, XFRC: connectorToken }),customConfig);
    if(response.status==200){
      const d = response.data;
      (lib.checkConnectionHeader(d.XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'});   
    }else{
      res.status(500).json({error:'Internal Server Error'});
    }
  }catch(error){
    res.status(500).json({error:'Internal Server Error'});
  }
   
})

/**
 * @Route /api/v1/ftcreate/tokenID
 * Create Connector JWT
 */
app.get('/api/v1/ftcreate/:token', async (req,res)=>{
  try{
    const jwttoken = req.params.token;
    const connectorToken=lib.getConnectionHeader();
    const customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
    };
  const response = await axios.post(`http://localhost/backend/API/CreateJWT.php`,JSON.stringify({ JWTToken: jwttoken, XFRC: connectorToken }),customConfig);
    if(response.status==200){
    const d = response.data;
      (lib.checkConnectionHeader(d[0].XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'});   
    }else{
      res.status(500).json({error:'Internal Server Error'});
    }
  }catch(error){
    res.status(500).json({error:'Internal Server Error'});
  }
   
})

/**
 * @Route /api/v1/shKey/tokenID
 * Create SharedKey -ENCRYPTION FORMAT PKCS1
 */
app.get('/api/v1/shKey/:token', async (req,res)=>{
  try{
    const shkey = req.params.token;
    const connectorToken=lib.getConnectionHeader();
    const customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
    };
  const response = await axios.post(`http://localhost/backend/API/CreateShKey.php`,JSON.stringify({ PubToken: shkey, XFRC: connectorToken }),customConfig);
    if(response.status==200){
    const d = response.data;   
      (lib.checkConnectionHeader(d[0].XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'}); 
    }else{
      res.status(500).json({error:'Internal Server Error'});
    }
  }catch(error){
    res.status(500).json({error:'Internal Server Error'});
  }
   
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);   
});