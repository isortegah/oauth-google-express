/**
 * Created by ISORTEGAH on 07/10/2016
 */

 'use strict'

 var express = require('express');
 var controller = require('./home.controller');
 var router = express.Router();

 router.get('/', controller.getAuth);
 
 module.exports = router;