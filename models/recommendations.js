/* const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const config=require('../config/database');

const RecommendationSchema = mongoose.Schema({
    exectNumber:{type:Boolean,required:true,unique: false},
    recExact:{type:Number,required:true,unique: false},
    recMin:{type:Number,required:true,unique: false},
    recMax:{type:Number,required:true,unique: false},
    startDate:{type:String,required:true,unique: false},
    endDate:{type:String,required:true,unique: false},
    assignedBy:{ type: Schema.Types.ObjectId, ref: "Clinician", required: true },
    assignedTo:{ type: Schema.Types.ObjectId, ref: "Clinician", required: true },
    repeat:{
        mon:{type:Boolean,required:true,default: false},
        tue:{type:Boolean,required:true,default: false},
        wed:{type:Boolean,required:true,default: false},
        thu:{type:Boolean,required:true,default: false},
        fri:{type:Boolean,required:true,default: false},
        sat:{type:Boolean,required:true,default: false},
        sun:{type:Boolean,required:true,default: false}
    },
    metric: { type: Schema.Types.ObjectId, ref: "Metric", required: true },
});
const Recommendation=module.exports=mongoose.model('Recommendation',RecommendationSchema); */