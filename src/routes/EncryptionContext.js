const express=require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');
const lib = require('../Utils/connectorHeader');
const Domaine="https://itsnando.com"

router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
  });
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))


/**
 * @Route /api/v1/ftcheck/handshakeID/tokenID/connectorToken
 * Check Connection JWT
 */
router.get('/ftcheck/:handshake/:token/:ctoken', async (req,res)=>{
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
              `${Domaine}/backend/API/CheckJWT.php`,
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
  router.get('/ftcreate/:token/:ctoken', async (req,res)=>{
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
              `${Domaine}/backend/API/CreateJWT.php`,
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
  router.get('/shKey/:token/:ctoken', async (req,res)=>{
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
              `${Domaine}/backend/API/CreateShKey.php`,
              JSON.stringify({ 
                PubToken: shkey, 
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
  

module.exports = router;