var json2csv = require('json2csv');
var Deal = require('../models/deal.js');
exports.get = function(req, res) {
 
    var fields = Object.keys(Deal.schema.obj);
 
    var csv = json2csv({ data: '', fields: fields });
 
    res.set("Content-Disposition", "attachment;filename=deals.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};