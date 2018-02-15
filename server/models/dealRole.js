var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);
var Deal = require('./deal.js');
var dealRoleSchema = mongoose.Schema({
dealNumber :  { type: Number},
dealRoleName : String,
users : String,
createdBy : String,
updatedBy : String,
createdAt : { type: Date},
updatedAt :{ type: Date},
},{ collection : 'dealrole' ,
	toJSON: { virtuals: true } 
}
).plugin(AutoIncrement, {inc_field: 'dealRoleId'});
 dealRoleSchema.virtual('deals', {
  ref: 'Deal', // The model to use
  localField: 'dealNumber', // Find deals where `localField`
  foreignField: 'dealNumber', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false
}); 
var DealRole = mongoose.model('DealRole', dealRoleSchema);
 
module.exports = DealRole;