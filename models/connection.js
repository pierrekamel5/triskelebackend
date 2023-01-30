/* const mongoose = require("mongoose");

const ConnectionSchema = mongoose.Schema({
  clinician: { type: mongoose.Schema.Types.ObjectId, ref: "Clinician", required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Accepted", "Dennied"],
  },
});

const Connection = (module.exports = mongoose.model(
  "Connection",
  ConnectionSchema
));

module.exports.searchClient = function (clinicianId, data, callback) {
  let sortName = data.sort;
  let sortType = data.sortType == "ASC";
  let search = data.search;
  let page = data?.page ?? 0;
  let pageSize = data?.pageSize ?? 50;
  Connection.aggregate([
    { $match: { clinician: mongoose.Types.ObjectId(clinicianId) }},
    { $skip: page * pageSize },
    { $limit: pageSize },
    {
        "$lookup": {
            "from": "client",
            "localField": "client",
            "foreignField": "_id",
            "pipeline": [
                { "$find": { "firstName": { "$regex": search, "$options": "i" }}},
                {"sort":{
                    sortName: sortType
                }}
            ],
            "as": "clientsArray"
        }
    } 
  ]).exec(callback);
};

module.exports.updateStatus = function (clientId,clinicianId,status){
    Connection.findOneAndUpdate({clinician: clinicianId,client:clientId},{status:status},callback);
} */