const express=require('express');
const router=express.Router();
const fs = require('fs');

const rootPath = "./sampleData/user_information/";

router.get('/AnlytsMeasures',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'Clinician-ApplicationFeatureTabs[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/AnlytsMeasures503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'Clinician-ApplicationFeatureTabs[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

module.exports=router;