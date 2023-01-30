/* const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const config=require('../config/database');

const MeasureSchema = mongoose.Schema({
    value:{type:Number,required:true,unique: false},
    date:{type:String,required:true,unique: false},
    recommmendation: { type: Schema.Types.ObjectId, ref: "Metric", required: true },
});
const Measure=module.exports=mongoose.model('Recommendation',MeasureSchema); */