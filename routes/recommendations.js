const express=require('express');
const router=express.Router();
const fs = require('fs');

const rootPath = "./sampleData/recommendations/";

router.get('/ListofRcmndtns',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'ListofRecommendations[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/ListofRcmndtns204',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'ListofRecommendations[204].json');
    let properties = JSON.parse(rawdata);
    return res.status(204).json(properties);
});


router.get('/ListofRcmndtns503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'ListofRecommendations[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});


router.get('/RcmndtnsCalendar',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RecommendationsCalendar[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/RcmndtnsCalendar204',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RecommendationsCalendar[204].json');
    let properties = JSON.parse(rawdata);
    return res.status(204).json(properties);
});

router.get('/RcmndtnsCalendar503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RecommendationsCalendar[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

router.get('/RcmndtnsDetails',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RecommendationsDetails[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/RcmndtnsDetails204',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RecommendationsDetails[204].json');
    let properties = JSON.parse(rawdata);
    return res.status(204).json(properties);
});

router.get('/RcmndtnsDetails503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RecommendationsDetails[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

router.get('/RstrRcmndtnOccurnc',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RestoreRecommendationOccurrence[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/RstrRcmndtnOccurnc204',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RestoreRecommendationOccurrence[204].json');
    let properties = JSON.parse(rawdata);
    return res.status(204).json(properties);
});

router.get('/RstrRcmndtnOccurnc503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'RestoreRecommendationOccurrence[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

module.exports=router;