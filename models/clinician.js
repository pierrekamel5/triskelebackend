const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const config=require('../config/database');


const ClinicianSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    location:{type:String,required:true},
    speciality:{type:String,required:true},
    licenseNumber:{type:String,required:true},
    profilePic:{type:String,default:"https://placekitten.com/200/300"}
});

const Clinician=module.exports=mongoose.model('Clinician',ClinicianSchema);


module.exports.getClinicianById=function(id,callback){
    Clinician.findById(id,callback);
}

module.exports.getClinicianByEmail=function(email,callback){
    const query={email:email};
    Clinician.findOne(query,callback);
}

module.exports.getClinicianByFirstName=function(firstName,callback){
    const query={firstName:firstName};
    Clinician.findOne(query,callback);
}

module.exports.updatePass=function(newClinicianData,callback){
    Clinician.findOne({_id: newClinicianData._id}, function (err, clinician) {
        clinician.password = newClinicianData.password;
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(clinician.password,salt,(err,hash)=>{
                if(err)throw err;
                clinician.password=hash;
                clinician.save(callback);
            });
        });
    });
}

module.exports.updateOne=function(newClinicianData,callback){
    Clinician.findOneAndUpdate({_id:newClinicianData._id}, newClinicianData, callback);
}

module.exports.findAllClinicians=function(callback){
    Clinician.find().populate().exec(callback);
}

module.exports.addClinician = function(newClinicianData,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newClinicianData.password,salt,(err,hash)=>{
            if(err)throw err;
            newClinicianData.password=hash;
            newClinicianData.save(callback);
        });
    });
}

module.exports.comparePassword=function(candidatePass,hash,callback){
    bcrypt.compare(candidatePass,hash,(err,isMatch)=>{
        if(err)throw err;
        callback(null,isMatch);
    });
}