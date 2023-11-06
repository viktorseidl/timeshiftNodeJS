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
 * @Route /api/v1/activateunit/tokenID/connectorToken
 * Activate Unit
 */
router.get('/activateunit/:token/:typ/:ctoken', async (req,res)=>{
    //CHECK IF CONNECTION ALLOWED ELSE RETURN 500
    const connectorTokenft = req.params.ctoken;
    const T = req.params.typ;
    if(lib.checkConnectionHeader(connectorTokenft)==true){
            
        try{
            const activateHash = req.params.token;      
            const connectorToken=lib.getConnectionHeader();
            const customConfig = {
              headers: new Headers({
              'Content-Type': 'application/json',
              })            
            };
            const response = await axios.post(
              `${Domaine}/backend/API/ActivateUnit.php`,
              JSON.stringify({ 
                AToken: activateHash, 
                T:T,
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
  });
  /**
   * @Route /api/v1/activate/tokenID/connectorToken
   * Activate Root Account and Install dependencies in DB
   */
  router.post('/activateroot/:token/:typ/:ctoken', async (req,res)=>{
    //CHECK IF CONNECTION ALLOWED ELSE RETURN 500
    const connectorTokenft = req.params.ctoken;
    if(lib.checkConnectionHeader(connectorTokenft)==true){
      const EncData = req.body;    
      try{
            const T = req.params.typ;
            const activateHash = req.params.token;      
            const connectorToken=lib.getConnectionHeader();
            const customConfig = {
              headers: new Headers({
              'Content-Type': 'application/json',
              })            
            };
            const response = await axios.post(
              `${Domaine}/backend/API/ActivateRootPass.php`,
              JSON.stringify({ 
                AToken: activateHash, 
                T:T,
                E:EncData.E,
                XFRC: connectorToken }),
              customConfig);
            //QUERY SUCCESSFUL
            //console.log(response.data)
            if(response.status==200){
              const d = response.data;
              if(d.D){
                (lib.checkConnectionHeader(d.XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'});   
              }else{
                (lib.checkConnectionHeader(d.XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'});   
              }
            }else{
              res.status(500).json({error:'Internal Server Error'});
            }
        }catch(error){
            res.status(500).json({error:'Internal Server Error'});
        }
    }else{
        res.status(500).json({error:'Internal Server Error'});
    }
     
  });

module.exports = router;