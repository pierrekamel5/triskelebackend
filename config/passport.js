const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const Client = require("../models/client");
const Clinician = require("../models/clinician");

const config = require("../config/database");

module.exports = function (passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      if (jwt_payload.data.licenseNumber)
        Clinician.getClinicianById(jwt_payload.data._id, function (err, user) {
          return done((err)?err:null, (user)?user:null);
        });
      else
        Client.getClinicianById(jwt_payload.data._id, function (err, user) {
            return done((err)?err:null, (user)?user:null);
        });
    })
  );
};
