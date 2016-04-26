/**
 *
 * Created by DucNguyenMinh on 26/04/16.
 */
require('dotenv').load();
var express = require('express');
var Cloudant = require('cloudant');

var username = process.env.cloudant_username;
var password = process.env.cloudant_password;

var cloudant = Cloudant({account:username, password:password});

var heroes_db = cloudant.db.use('heroes');

exports.getHeroes = function (callback) {
    heroes_db.find({selector:{_id:{$gt:0}},fields:["_id","name"]},function(err,result) {
        var heroes = result.docs;
        callback(heroes);
    });
};

// exports.getHero = function (callback) {
//     mongodb.find(function(res, err) {
//         var hero = res.result;
//         callback(hero);
//     });
// };



