const express=require('express');
const router = express.Router();
const IP = require('ip');
const bodyParser = require('body-parser');
const axios = require('axios');
const lib = require('../Utils/connectorHeader');
const Domaine=lib.getDomain();

router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
  });
router.use(bodyParser.json({limit: 2500000}))
router.use(bodyParser.urlencoded({limit: 2500000, extended: false}))

  /**
   * @Route /api/v1/Mitarbeiter/QueryTyp
   * ADMIN MITARBEITER
   */
  router.post('/:typ/:stid/:ctoken', async (req,res)=>{
    //CHECK IF CONNECTION ALLOWED ELSE RETURN 500
    const connectorTokenft = req.params.ctoken;
    if(lib.checkConnectionHeader(connectorTokenft)==true){
      const EncData = req.body;  
      try{
              const querytype = req.params.typ;
              const stid = req.params.stid;
              const connectorToken=lib.getConnectionHeader();
            const customConfig = {
              headers: new Headers({
              'Content-Type': 'application/json',
              })            
            };
            const response = await axios.post(
              `${Domaine}/backend/API/ucontroller/adminpanel/UAdminMitarbeiter.php`,
              JSON.stringify({ 
                T:querytype,
                StID:stid,
                E:EncData.E,
                I:IP.address()?IP.address():req.header('x-forwarded-for')?req.header('x-forwarded-for'):req.socket.remoteAddress,//req.socket.remoteAddress,
                F:EncData.F?EncData.F:'',
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
  
  
  module.exports = router;