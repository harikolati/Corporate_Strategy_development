var csv = require('fast-csv');
var mongoose = require('mongoose');
var Deal = require('../../models/deal.js');
exports.post=function(req,res){
	if(!req.files.file){
		return res.status(400).send('No files found');
	}
	var dealFiles=req.files.file;

	
	csv.fromString(dealFiles.data.toString(),{
		headers : true,
		ignoreEmpty : true 
	})
	.on('data',function(data){
		data['_id'] = new mongoose.Types.ObjectId();
		var deals =new Deal(data);
		deals.save(function(err){
			if (err) throw err;
     		console.log('Deal successfully saved.');	
		});
		
	})
	 
	.on("end", function(){
		/*Employee.create(employees,function(err,doc){
			if (err) throw err;
		});	*/
		res.send(' Deals have been successfully uploaded.');
	});
}