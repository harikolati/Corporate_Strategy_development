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
    var userName=req.query.userName;
    Deal.find({transactionStage : "Integration Closed",
        'followedUsers': {$nin:[userName]}})
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

router.get('/dealRole/followed', function (req, res, next) {
    var userName=req.query.userName;
    Deal.find({'followedUsers':{ "$regex": userName, "$options": "i" }})
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
router.get('/dealRole/:dealType', function (req, res, next) {
  var userName=req.query.userName;
  var dealType= req.param('dealType');
DealRole.
  find({users : userName,
    dealRoleName: 'Integration Lead',
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
           var segregatedDeals= getSegregatedDeals(doc,dealType);
            res.status(200).json({
                message: 'Success',
                obj: segregatedDeals
            });
  });

});
var getSegregatedDeals=function(deals,dealType){
    var dealsObj = JSON.parse(JSON.stringify(deals));
    var dealsResult=[];
    var transactionType={
        "Project Closed":"",
        "Onhold":"",
        "Integration Closed":"",
    }
 for(var i=0; i<dealsObj.length; i++) {
    var deal=dealsObj[i];
    if(deal.deals && deal.deals.length){
        if(dealType==='inActive'){
        if(deal.deals[0].transactionStage==='Project Closed'){
            deal.deals[0].inactive={
               completed:true 
            }
            dealsResult.push(deal.deals[0]);
        }
        else if(deal.deals[0].transactionStage==='Onhold'){
             deal.deals[0].inactive={
               Onhold:true 
            }
            dealsResult.push(deal.deals[0]);
        }
    }
    else if(dealType==='active'){
        if(!(deal.deals[0].transactionStage in transactionType)){
            dealsResult.push(deal.deals[0]);
        }
    }
    }
}
return dealsResult;
}


module.exports = router;
