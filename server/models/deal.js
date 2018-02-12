var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);
var Buffer = require('buffer/').Buffer
var dealSchema = mongoose.Schema({
companyLogo : Buffer,
targetCompanyName : String,
dealCode : String,
transactionType : String,
purchasePrice : String, 
publicrPriviate :String,
dealType : String,
marketSegment :[String],
sponsoringGroupName : String,
groupDescription : String,
pressAnnounceSource : String,
companyDescription : String,
announceYear : String,
closeQuarter : String,
targetMarketSegment : [String],
monetizationModel : String,
transactionStage : String,
empCountonAnnounce : Number,
employeesOnBoarded : Number,
createdBy : String,
updatedBy : String,
createdAt : { type: Date},
updatedAt :{ type: Date},
},
{ collection : 'Deals' }
).plugin(AutoIncrement, {inc_field: 'dealNumber'});;
var Deal = mongoose.model('Deal', dealSchema);
 
module.exports = Deal;