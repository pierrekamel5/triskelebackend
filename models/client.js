const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const config=require('../config/database');

const ClientSchema = mongoose.Schema({
    prefferedName:{type:String,required:true,unique: false},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profession:{type:String,required:true,unique: false},
    profilePic:{type:String,default:"https://placekitten.com/800/800"}
});
const Client=module.exports=mongoose.model('Client',ClientSchema);


module.exports.getClientById=function(id,callback){
    Client.findById(id,callback);
}

module.exports.getClientByEmail=function(email,callback){
    const query={email:email};
    Client.findOne(query,callback);
}

module.exports.getClientByFirstName=function(firstName,callback){
    const query={firstName:firstName};
    Client.findOne(query,callback);
}

module.exports.updatePass=function(newClientData,callback){
    Client.findOne({_id: newClientData._id}, function (err, client) {
        client.password = newClientData.password;
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(client.password,salt,(err,hash)=>{
                if(err)throw err;
                client.password=hash;
                client.save(callback);
            });
        });
    });
}

module.exports.updateOne=function(newClientData,callback){
    Client.findOneAndUpdate({_id:newClientData._id}, newClientData, callback);
}

module.exports.findAllClient=function(callback){
    Client.find().populate().exec(callback);
}

module.exports.addClient = function(newClientData,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newClientData.password,salt,(err,hash)=>{
            if(err)throw err;
            newClientData.password=hash;
            newClientData.save(callback);
        });
    });
}

module.exports.comparePassword=function(candidatePass,hash,callback){
    bcrypt.compare(candidatePass,hash,(err,isMatch)=>{
        if(err)throw err;
        callback(null,isMatch);
    });
}