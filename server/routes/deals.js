var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var path = require('path');
var Deal = require('../models/deal');
var DealRole = require('../models/dealRole');

router.get('/getDeals',function(req,res){
    res.sendFile(path.join(__dirname,'../public','uploadDeals.html'));
})

var template = require('../api/data/template.js');
router.get('/template', template.get);

var upload = require('../api/data/upload.js');
router.post('/uploadDeals', upload.post);

router.get('/', function (req, res, next) {
    Deal.find()
        .exec(function (err, deals) {
            if (err) {
                console.log("ERROR");
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: deals
            });
        });
});

router.get('/dealRole', function (req, res, next) {
  var userName=req.query.userName;
DealRole.
  find({users : userName,
    dealRoleName: 'Integration Lead'
  }).
  populate('deals').
  exec(function(err, doc) {   
    if (err) {
                console.log("ERROR");
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: doc
            });
  });

});

module.exports = router;
