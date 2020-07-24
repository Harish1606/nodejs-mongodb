var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url='mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db) {
	if(err){
		console.log(err);
	}
	else{
		console.log('Connected to',url);
		var dbo=db.db('fruits');
		var doc1={name:'red apple',color:'red'};
		var doc2={name:'green apple',color:'green'};
		/*dbo.collection('apples').insertMany([doc1,doc2],function(err,res){
			if (err) throw err;
			console.log('number of documents inserted:'+res.insertedCount);
			console.log(res);
		});*/
		/*dbo.collection('apples').find({},{projection:{_id:0,name:1,color:1}}).toArray(function(err,res){
			if (err) throw err;
			console.log(res[2].name);
			db.close();*/

		/*var query1={color:'red'};
		dbo.collection('apples').find(query1).toArray(function(err,res){
		if (err) throw err;
		console.log(res);
		db.close();
		});
		//regular expression to find the specfic documents
		var query2={color:/^r/};
		dbo.collection('apples').find(query2).toArray(function(err,res){
			if (err) throw err;
			console.log(res);
			db.close();
		});*/
		/*var mysort={name:1};//ascending
		dbo.collection("apples").find().sort(mysort).toArray(function(err,res){
			if (err) throw err;
			console.log(res);
			db.close();
		});*/
		/*var mysort={name:-1};//descending
		dbo.collection("apples").find().sort(mysort).toArray(function(err,res){
			if (err) throw err;
			console.log(res);
			db.close();
		});*/
		/*var query={name:'red apple'};
		dbo.collection('apples').deleteOne(query,function(err,obj){
			if (err) throw err;
			console.log(obj.result.n);
			db.close();
		});*/
		/*var old_query={color:'red'};
		var new_query={$set:{color:'dark red'}};
		dbo.collection('apples').updateMany(old_query,new_query,function(err,res){
			if (err) throw err;
			console.log(res.result.nModified);
			db.close();
		});*/
		//To limit the result in mongdb we use limit
		dbo.collection('apples').find().limit(5).toArray(function(err,res){
			if (err) throw err;
			console.log(res);
			db.close();
		});
	}
});