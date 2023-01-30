/* const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const config=require('../config/database');

const MetricSchema = mongoose.Schema({
    title:{type:String,required:true,unique: false},
    healthKitName:{type:String,required:true},
    type:{type:String,required:true, enum: ["Activity", "Nutrition", "Sleep","Phisyiologic"],default:"Activity"},
    unit:{type:String,required:true},
    vizualization:{type:String,required:true, enum: ["Bar", "Scatter", "Area","Vertical"],default:"Bar"},
    min:{type:Number,required:true,unique: false},
    max:{type:Number,required:true,unique: false},
    filePath:{type:String,required:true,unique: false},
    fileName:{type:String,required:true,unique: false}
});
const Metric=module.exports=mongoose.model('Metric',MetricSchema); */