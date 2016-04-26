/**
 * Created by DucNguyenMinh on 25/04/16.
 */
require('dotenv').load();
var express = require('express');
var server = express();
var cfenv = require('cfenv');
var Cloudant = require('cloudant');

var password = process.env.cloudant_password;
var username = process.env.cloudant_username;

var cloudant = Cloudant({account:username, password: password })

// cloudant.db.list(function (err, allDbs) {
//     console.log('All my databases: %s', allDbs.join(', '))
// });

var heroService = require('./heroes.service');

server.get('/heroes', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    heroService.getHeroes(function (data) {
        res.end(JSON.stringify({data:data}));
    });
});
//
// heroService = {
//     getHeroes: function() {
//     },
//     getHero: function () {
//     }
// };
//
// var my_db = cloudant.db.use('alice');
// cloudant.db.destroy('alice', function (err) {
//
//     cloudant.db.create('alice',function(){
//
//         var alice = cloudant.db.use('alice');
//
//         alice.insert({crazy:true,age:32}, 'rabit1', function (err, body, header) {
//             if(err){
//                 return console.log('[alice.insert]', err.message);
//             }
//
//             console.log('You have insterted the rabbit.');
//             console.log(body);
//         } )
//
//         alice.insert({crazy:true,age:30}, 'rabit3', function (err, body, header) {
//             if(err){
//                 return console.log('[alice.insert]', err.message);
//             }
//
//             console.log('You have insterted the rabbit.');
//             console.log(body);
//         } )
//
//     });
//
// });
//
// cloudant.generate_api_key(function(err,api){
//    if (err){
//        throw err;
//    }
//
//     console.log('API key: %s', api.key);
//     console.log('Password for this key: %s', api.password);
//     console.log('');
//
//     var db = "alice";
//     var security = {
//         nobody: [],
//         nodejs: ['_reader', '_writer', '_admir', '_replicator']
//     };
//
//     security[api.key] = ['_reader', '_writer'];
//
//     var my_database = cloudant.db.use(db);
//     my_database.set_security(security, function (er, result) {
//         if (er){
//             throw er;
//         }
//
//         console.log('Set security for ' + db);
//         console.log(result);
//         console.log('');
//
//         my_database.get_security(function (er,result) {
//             if (er) {
//                 throw er;
//             }
//             console.log('Got security for ' + db);
//             console.log(result);
//         });
//
//     });
//
//     my_database.find({selector:{_id:{$gt:0}},sort:[{_id: "asc"}]}, function (er, result) {
//         if(er) {
//             throw er;
//         }
//
//         console.log('Found %d documents with name Alice', result.docs.length);
//
//         for (var i=0; i < result.docs.length; i++){
//             console.log('  Doc _id: %s', JSON.stringify( result.docs[i]));
//         }
//     } )
//
//     var first_name = {name:"age", type:"json", index:{fields:["age"]}}
//     my_database.index({ index: {}, type: "text" }, function(er, response) {
//         if (er) {
//             throw er;
//         }
//
//         console.log('Index creation result: %s', response.result);
//     });
//
//     my_database.find({selector:{age:{$gt:0}},fields:["_id","age"],sort:[{age: "asc"}]}, function (er, result) {
//         if(er) {
//             throw er;
//         }
//
//         console.log('Found %d documents with name Alice', result.docs.length);
//
//         for (var i=0; i < result.docs.length; i++){
//             console.log('  Doc _id: %s', JSON.stringify( result.docs[i]));
//         }
//     } )
//
// });
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var serverEnv = cfenv.getAppEnv();
server.listen(serverEnv.port,'0.0.0.0', function () {

   console.log("server starting on "+ serverEnv.url);
});