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
           var segregatedDeals= getSegregatedDeals(doc);
            res.status(200).json({
                message: 'Success',
                obj: segregatedDeals
            });
  });

});

var getSegregatedDeals=function(deals){
    var dealsObj = JSON.parse(JSON.stringify(deals));

     var segregatedDeals={
        activeDeals:[],
        inactiveDeals:[],
        followedDeals :[]
    };
 for(var i=0; i<dealsObj.length; i++) {
    var deal=dealsObj[i];
    if(deal.deals && deal.deals.length){
        if(deal.deals[0].transactionStage==='Project Closed'){
            deal.deals[0].inactive={
               completed:true 
            }
            segregatedDeals.inactiveDeals.push(deal.deals[0]);
        }
        else if(deal.deals[0].transactionStage==='Onhold'){
             deal.deals[0].inactive={
               Onhold:true 
            }
            segregatedDeals.inactiveDeals.push(deal.deals[0]);
        }
         else if(deal.deals[0].transactionStage==='Integration Closed'){
            segregatedDeals.followedDeals.push(deal.deals[0]);
        }
        else{
            segregatedDeals.activeDeals.push(deal.deals[0]);
        }
    }
}
return segregatedDeals;
}
module.exports = router;
