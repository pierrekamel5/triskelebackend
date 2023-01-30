const express=require('express');
const router=express.Router();
const fs = require('fs');

const rootPath = "./sampleData/dashboard/";

const formatDate = (date)=>{
    return new Date(date).toISOString().split("T")[0];
}


router.get('/DailyDashboard',(req,res,next)=>{
    let date = req.query.SlctdDate;
    if(formatDate(date)<=formatDate("05/14/2022")){
        let rawdata = fs.readFileSync(rootPath + 'DailyDashboard[200]WeekLess.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }else if(formatDate(date)>=formatDate("05/22/2022")){
        let rawdata = fs.readFileSync(rootPath + 'DailyDashboard[200]WeekMore.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }
    else if(date=='05/17/2022' || date=='05/16/2022' || date=='05/15/2022'){
        let rawdata = fs.readFileSync(rootPath + 'DailyDashboard[200]OneDayLess.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    } 
    else if(date=='05/19/2022' || date=='05/20/2022' || date=='05/21/2022'){
        let rawdata = fs.readFileSync(rootPath + 'DailyDashboard[200]OneDayMore.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }
    else{
        let rawdata = fs.readFileSync(rootPath + 'DailyDashboard[200].json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }
});

router.get('/DailyDashboard204',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'DailyDashboard[204].json');
    let properties = JSO4.parse(rawdata);
    return res.status(204).json(properties);
});

router.get('/DailyDashboard503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'DailyDashboard[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});

router.get('/WeeklyDashboard',(req,res,next)=>{
    let date = req.query.StartDate;
    if(formatDate(date)<=formatDate("05/14/2022")){
        let rawdata = fs.readFileSync(rootPath + 'WeeklyDashboard[200]WeekLess.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }else if(formatDate(date)>=formatDate("05/22/2022")){
        let rawdata = fs.readFileSync(rootPath + 'WeeklyDashboard[200]WeekMore.json');
        let properties = JSON.parse(rawdata);
        return res.status(200).json(properties);
    }
    let rawdata = fs.readFileSync(rootPath + 'WeeklyDashboard[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/WeeklyDashboard204',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'WeeklyDashboard[204].json');
    let properties = JSON.parse(rawdata);
    return res.status(204).json(properties);
});

router.get('/WeeklyDashboard503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'WeeklyDashboard[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});


module.exports=router;