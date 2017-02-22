 /**
 * Created by ISORTEGAH on 22/02/2017
 */
// expose our config directly to our application using module.exports
require('dotenv').config();
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : process.env.GOA_CID,
        'clientSecret'  : process.env.GOA_CS,
        'callbackURL'   : process.env.GOA_CB
    },

    'googleAuthLocal' : {
        'clientID'      : process.env.GOAL_CID,
        'clientSecret'  : process.env.GOAL_CS,
        'callbackURL'   : process.env.GOAL_CB
    }

};