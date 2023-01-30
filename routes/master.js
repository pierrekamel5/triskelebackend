const express=require('express');
const router=express.Router();
const fs = require('fs');

const rootPath = "./sampleData/master/";

router.get('/AllPropertys',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'AllProperties[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/AllMeasureCtgys',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'AllMeasureCategories[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/AllMeasures',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'AllMeasures[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/AllUnits',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'AllUnits[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/AppFeatureTabs',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'ApplicationFeatureTabs[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

module.exports=router;