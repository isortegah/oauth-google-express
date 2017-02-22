/**
 * Created by ISORTEGAH on 13/02/2017
 */
'use strict'
var _ = require('lodash');

exports.filtroOauth = function ( err , user , info ){
    if ( user ){
        return true;
        /**
         * Aqui pueden inyectar las validaciones requeridas para verificar si con la cuenta que se 
         * loguearon se le permite el acceso
         */
    }else{
        return false;
    }
};