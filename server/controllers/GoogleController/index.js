/**
 * Created by ISORTEGAH on 13/02/2017
 */

'use strict'
 require('dotenv').config();
 var express = require( 'express' );
 var controller = require( './google.controller' );
 var router = express.Router();
 var passport = require( 'passport' );
 var urlGApi = 'https://www.googleapis.com/auth/userinfo'
 passport = require('./../../../config/passport')(passport);
 
 router.get( '/' , passport.authenticate( 'google' , {
     scope : [
        urlGApi + ".profile",
        urlGApi + ".email"
     ]

 }));

 module.exports = router;