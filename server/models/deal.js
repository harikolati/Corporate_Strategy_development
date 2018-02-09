var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);
var schema = new Schema({
	dealNumber : {type : Number},
    transactionType: {type: String},
    dealCode: {type: String},
    dealType: {type: String},
    dealMarketSegment:  [String],
    targetMarketSegment:  [String],
    dealSize: {type: String},
    purchasePrice: {type: String}
},
{ collection : 'Deals' });

module.exports = mongoose.model('Deal', schema);