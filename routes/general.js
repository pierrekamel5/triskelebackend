const express=require('express');
const router=express.Router();
const fs = require('fs');

const rootPath = "./sampleData/general/";

const formatDate = (date)=>{
    return new Date(date).toISOString().split("T")[0];
}


router.get('/ClientProfileHeadr',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'ClientProfileHeader[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/ClientProfileHeadr503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'ClientProfileHeader[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

router.get('/MeasureCtgyChips',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'MeasureCategoryChips[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/MeasureCtgyChips503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'MeasureCategoryChips[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

router.get('/MonthView',(req,res,next)=>{
    let position = Number(req.query.MonthAdd);
    if(position<0){
        let rawdata = fs.readFileSync(rootPath + 'MonthView[200]MonthLess.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }else if(position>0){
        let rawdata = fs.readFileSync(rootPath + 'MonthView[200]MonthMore.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }
    let rawdata = fs.readFileSync(rootPath + 'MonthView[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/MonthView503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'MonthView[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

router.get('/UnitCnvrsns',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'UnitConversions[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/WeekView',(req,res,next)=>{
    let date = req.query.SlctdDate;
    if(formatDate(date)<=formatDate("05/14/2022")){
        let rawdata = fs.readFileSync(rootPath + 'WeekView[200]WeekLess.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }else if(formatDate(date)>=formatDate("05/22/2022")){
        let rawdata = fs.readFileSync(rootPath + 'WeekView[200]WeekMore.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }
    let rawdata = fs.readFileSync(rootPath + 'WeekView[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/WeekView503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'WeekView[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

module.exports=router;