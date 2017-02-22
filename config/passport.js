/**
 * Created by ISORTEGAH on 22/00/2017
 */
// load all the things we need
var LocalStrategy    = require('passport-local').Strategy;
//var FacebookStrategy = require('passport-facebook').Strategy;
//var TwitterStrategy  = require('passport-twitter').Strategy;

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');

module.exports = ( passport ) => {
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.emails[0].value);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        done(null,id);
    });

    passport.use(new GoogleStrategy(getConfigAuth(),
    function(token, refreshToken, profile, done) {
            process.nextTick(function(){
                var user = {
                    "id" : profile.id,
                    "displayName" : profile.displayName,
                    "emails" : profile.emails
                }
                return done(null,user)
            });
        
        }));
    return passport;

};


function getConfigAuth(){
    var env = process.env.NODE_ENV || 'development';
    switch(env){
        case 'development':
            return {
                clientID        : configAuth.googleAuthLocal.clientID,
                clientSecret    : configAuth.googleAuthLocal.clientSecret,
                callbackURL     : configAuth.googleAuthLocal.callbackURL
            }
        case 'production':
            return {
                    clientID        : configAuth.googleAuth.clientID,
                    clientSecret    : configAuth.googleAuth.clientSecret,
                    callbackURL     : configAuth.googleAuth.callbackURL
                }
        default:
          return {
                clientID        : configAuth.googleAuthLocal.clientID,
                clientSecret    : configAuth.googleAuthLocal.clientSecret,
                callbackURL     : configAuth.googleAuthLocal.callbackURL
            }  
    }

}