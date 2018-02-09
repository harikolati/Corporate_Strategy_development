var express = require('express');
var router = express.Router();

var Deal = require('../models/deal');

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



module.exports = router;