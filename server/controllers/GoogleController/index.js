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

 router.get( '/callback' , ( req , res , next ) => {
     passport.authenticate( 'google' , {
     scope : [
        urlGApi + ".profile",
        urlGApi + ".email"
        ],
        failureRedirect : '/'
     } , ( err , user , info ) =>{
        if ( controller.filtroOauth( err , user , info ) ) {
            req.login( user , ( err ) => {
                if( err ) { return next( err )}
                return res.redirect( '/app' );
            })
        }else
            return res.redirect( '/' );   
     }
     )(req, res, next);
 });

 module.exports = router;