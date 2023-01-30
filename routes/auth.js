const express=require('express');
const router=express.Router();
const path = require('path');

const jwt=require('jsonwebtoken');
const passport=require('passport');
const config=require('../config/database');

const Client=require('../models/client');


router.get('/authorize',(req,res,next)=>{
    //  https://www.example.com/authroize?response_type=code&client_id=CLIENT_ID&redirect_uri=https://app.buildfire.com/app/oauth2/callback&scopes=profile&state="{"appId": '', providerId: ''}"
    let responseType=req.query.response_type;
    let clientId=req.query.client_id;
    let redirectUrl=req.query.redirect_url;
    let scopes=req.query.scopes;
    let state=req.query.state;
    console.log("response type",responseType);
    console.log("clientId",clientId);
    console.log("redirectUrl",redirectUrl);
    console.log("scopes",scopes);
    console.log("state",state,state.appId);

    //response type token
    //clientId clientId
    // redirectUrl undefined  https://app.buildfire.com/api/app/oauth2/callback
    //scopes evrything
    //state {"appId":"32f6b63d-50d1-11e9-8fc5-06e43182e96c","providerId":"08fcdc8f-3ba6-44b1-88ee-d59272b1ac35","responseType":"token","requestLoginToken":"adCRuSxq1QLnRxGwwLbw3XY5y9G2DUz9VLwphGpt7QA="}
    let client={username:"Nemanja",firstName:"Nemanja",lastName:"Tesic"};
    const token = jwt.sign({data:client},config.secret, {expiresIn: 604800});
    let redirectLink= `https://auth.buildfire.com/app/oauth2/callback?access_token=${token}&state=${state}`;
    //https://auth.buildfire.com/app/oauth2/callback?code=f8d085bd079a4a13b7c43eb6a1a06323d8fb420c2d054c88a319e386d8448ba2&state=%7B%22appId%22%3A%2232f6b63d-50d1-11e9-8fc5-06e43182e96c%22%2C%22providerId%22%3A%228fe42ad1-7312-4cbd-b638-090054ada3d9%22%2C%22responseType%22%3A%22code%22%2C%22requestLoginToken%22%3A%22Qt8LG3YvTRWRVjmeY5V1yJnf1ka6lPE8mBGcJRtM9sA%3D%22%7D&&paramsParsed=true
    return res.redirect(301, redirectLink);
});

router.post('/token',(req,res,next)=>{
    console.log("pozivam token query GET",req.query);
    console.log("pozivam token header GET",req.header);
    console.log("pozivam token body GET",req.body);
    let client={username:"Nemanja",firstName:"Nemanja",lastName:"Tesic"};
    const token = jwt.sign({data:client},config.secret, {expiresIn: 604800});
    return res.status(200).json({
        "access_token":token,
        "token_type":"bearer",
        "refresh_token":token,
        "expires_in":604800
    });
});

router.post('/token',(req,res,next)=>{
    console.log("pozivam token GET");
    let client={username:"Nemanja",firstName:"Nemanja",lastName:"Tesic"};
    const token = jwt.sign({data:client},config.secret, {expiresIn: 604800});
    return res.status(200).json({
        "access_token":token,
        "token_type":"bearer",
        "refresh_token":token,
        "expires_in":604800
    });
});

router.get('/info',(req,res,next)=>{
    console.log("pozivam info GET");
    return res.status(200).json(   {
        "sub": "545454-54565-6565",
        "given_name": "Moe",
        "family_name": "Hasan",
        "name": "Moe Hasn",
        "email": "moe@gmail.com" 
      } );
});

router.post('/info',(req,res,next)=>{
    console.log("pozivam info POST");
    return res.status(200).json(   {
        "sub": "545454-54565-6565",
        "given_name": "Moe",
        "family_name": "Hasan",
        "name": "Moe Hasn",
        "email": "moe@gmail.com" 
      } );
});
/* router.post('/login',(req,res,next)=>{
    let text=JSON.parse(Object.keys(req.body)[0]);
    const email=text?.email ?? text.username;
    const password=text.password;
    Client.getClientByEmail(email,(err,client)=>{
        if(err)
            return res.status(500).json({status:"500 Internal Server Error"});
        if(!client)
            return res.status(400).json({"error": "User not found","error_description": "User not found"});
        if(client.banned==true)
            return res.status(400).json({"error": "You are banned!","error_description": "You are banned!"});
        Client.comparePassword(password,client.password,(err,isMatch)=>{
            if(err)
                return res.status(500).json({status:"500 Internal Server Error"});
            if(isMatch){
                const token = jwt.sign({data:client},config.secret, {expiresIn: 604800});
                let response={
                    "issued_at": new Date().getTime(),
                    "status": "approved",
                    "expires_in": 604800,
                    "token_type": "BearerToken", //only support Bearer Token
                    "access_token": token,
                    "client_id": "test"//keep client id in sync
                };
                return res.status(200).send(response);
            }else
                return res.status(400).json({"error": "Wrong password","error_description": "Wrong password"});
        });
    });
});


router.get('/profile',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    var data={
        "first_name": req.user.firstName, 
        "last_name": req.user.lastName,
        "email": req.user.email,
        "user_name":  req.user.prefferedName,
        "display_name":  req.user.firstName + " "+ req.user.lastName,
        "profile_pic": req.user.profilePic
      };
    return res.status(200).send(data);
});

router.get('/register',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../public/clientRegistration.html'));
});

router.post('/register',(req,res,next)=>{

     let newClient=new Client(req.body);

     Client.addClient(newClient,(err)=>{
         if(err){
             console.error(err);
             if (err.name === 'MongoError' && err.code === 11000)
                 return res.status(400).json({status:"Validation failed"});
             else 
                 return res.status(500).json({status:"500 Internal Server Error"});
         }
         else{
            const token = jwt.sign({data:newClient} ,config.secret, {expiresIn: 604800});
            return res.status(202).json({username:newClient.prefferedName,access_token:token});
         }
     });
});

router.get('/reset',(req,res,next)=>{
    console.log("Reset password for Client:",req.query.email);
    return res.status(200).json({status:"OK"});
});
 */

module.exports=router;