const express=require('express');
const router=express.Router();
const fs = require('fs');

const rootPath = "./sampleData/analytics/";

router.post('/_Anlyts_AnlytsReports',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'AnalyticsMeasures[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

router.get('/AnlytsMeasures204',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'AnalyticsMeasures[204].json');
    let properties = JSON.parse(rawdata);
    return res.status(204).json(properties);
});

router.get('/AnlytsMeasures503',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + 'AnalyticsMeasures[503].json');
    let properties = JSON.parse(rawdata);
    return res.status(503).json(properties);
});


//-----------New APIs---------
router.post('/_General_MeasureCtgyChips',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + '_General_MeasureCtgyChips[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

// {
//     "params":[
//        {
//           "name":"ScrnId",
//           "value":"PCnDd01"
//        },
//        {
//           "name":"BuildfireID",
//           "value":"D"
//        },
//        {
//           "name":"UserID",
//           "value":"1"
//        },
//        {
//           "name":"ClientID",
//           "value":"C1000"
//        },
//        {
//           "name":"StartDate",
//           "value":"10/02/2022"
//        },
//        {
//           "name":"EndDate",
//           "value":"10/08/2022"
//        },
//        {
//           "name":"isVisible",
//           "value":"1"
//        }
//     ]
//  }

router.post('/_General_WeekView',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + '_General_WeekView[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

// {
//     "params":[
//        {
//           "name":"ScrnId",
//           "value":"PCnDd01"
//        },
//        {
//           "name":"BuildfireID",
//           "value":"D"
//        },
//        {
//           "name":"UserID",
//           "value":"1"
//        },
//        {
//           "name":"slctdDate",
//           "value":"10/04/2022"
//        },
//        {
//           "name":"FirstDayOfWeek",
//           "value":"1"
//        },
//        {
//           "name":"WeekAdd",
//           "value":"0"
//        },
//        {
//           "name":"isVisible",
//           "value":"1"
//        }
//     ]
//  }


router.post('/_General_MonthView',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + '_General_MonthView[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

// {
//     "params":[
//        {
//           "name":"ScrnId",
//           "value":"PCnDd01"
//        },
//        {
//           "name":"BuildfireID",
//           "value":"D"
//        },
//        {
//           "name":"UserID",
//           "value":"1"
//        },
//        {
//           "name":"slctdDate",
//           "value":"10/01/2022"
//        },
//        {
//           "name":"FirstDayOfWeek",
//           "value":"1"
//        },
//        {
//           "name":"MonthAdd",
//           "value":"1"
//        },
//        {
//           "name":"isVisible",
//           "value":"1"
//        }
//     ]
//  }

router.post('/_Dashboard_DailyDashboard',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + '_Dashboard_DailyDashboard[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});


// {
//     "params":[
//        {
//           "name":"ScrnId",
//           "value":"PCnDd01"
//        },
//        {
//           "name":"BuildfireID",
//           "value":"D"
//        },
//        {
//           "name":"UserID",
//           "value":"1"
//        },
//        {
//           "name":"ClientID",
//           "value":"C1000"
//        },
//        {
//           "name":"slctdDate",
//           "value":"10/04/2022"
//        },
//        {
//           "name":"isVisible",
//           "value":"1"
//        }
//     ]
//  }

router.post('/_Dashboard_WeeklyDashboard',(req,res,next)=>{
    let rawdata = fs.readFileSync(rootPath + '_Dashboard_WeeklyDashboard[200].json');
    let properties = JSON.parse(rawdata);
    return res.status(200).json(properties);
});

// {
//    "params":[
//       {
//          "name":"ScrnId",
//          "value":"PCnDd01"
//       },
//       {
//          "name":"BuildfireID",
//          "value":"D"
//       },
//       {
//          "name":"UserID",
//          "value":"1"
//       },
//       {
//          "name":"ClientID",
//          "value":"C1000"
//       },
//       {
//          "name":"StartDate",
//          "value":"10/02/2022"
//       },
//       {
//          "name":"EndDate",
//          "value":"10/08/2022"
//       },
//       {
//          "name":"isVisible",
//          "value":"1"
//       }
//    ]
// }



module.exports=router;