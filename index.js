const express = require('express');
const axios = require('axios');
const app = express();

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
//Check Connection JWT
app.get('/api/v1/ftcheck/:handshake/:token', async (req,res)=>{
   
  try{
    const handshake = req.params.handshake;
    const jwttoken = req.params.token;
    const customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
    };
  const response = await axios.post(`http://localhost/backend/API/CheckJWT.php`,JSON.stringify({ HANDSHAKE: handshake, JWTToken: jwttoken }),customConfig);
  if(response.status==200){
  const d = response.data;
  console.log(d);
  res.send(d);
  }else{
    res.status(500).json({error:'Internal Server Error'});
  }
  }catch(error){
    res.status(500).json({error:'Internal Server Error'});
  }
   
})
//Create Connector JWT
app.get('/api/v1/ftcreate/:token', async (req,res)=>{
  try{
    const jwttoken = req.params.token;
    const customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
    };
  const response = await axios.post(`http://localhost/backend/API/CreateJWT.php`,JSON.stringify({ JWTToken: jwttoken }),customConfig);
  if(response.status==200){
  const d = response.data;
  res.send(d);
  }else{
    res.status(500).json({error:'Internal Server Error'});
  }
  }catch(error){
    res.status(500).json({error:'Internal Server Error'});
  }
   
})
//Create SharedKey -ENCRYPTION FORMAT PKCS1
app.get('/api/v1/shKey/:token', async (req,res)=>{
  try{
    const shkey = req.params.token;
    const customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
    };
  const response = await axios.post(`http://localhost/backend/API/CreateShKey.php`,JSON.stringify({ PubToken: shkey }),customConfig);
  if(response.status==200){
  const d = response.data;
  res.send(d);
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