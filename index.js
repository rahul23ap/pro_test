var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var conn = require('./db_config.js');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

var admin_user_id = 1;


//rest api to get all subjects
app.get('/getAllsubjects', function (req, res) {
	
	//console.log()
	//console.log(req.query);
	
	if(Object.keys(req.query).length > 0){
		sqlparam = '';
		if(req.query.order){
			sqlparam += ' order by subject_name '+req.query.order;
		}

		if(req.query.pagesize){
			sqlparam += ' LIMIT '+req.query.pagesize;

		}
		
	}
   sqlSubject = 'select * from sub_master '+sqlparam;
   console.log(sqlSubject);

   conn.query(sqlSubject, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

app.get('/getTrainings', function (req, res) {
   conn.query('select * from training_course_master', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

app.get('/getTrainingBySubject', function (req, res) {
	var sqlTraining = "select * from training_course_master where subject_ids like '%" +req.query.subject+"%'" ;
	console.log(sqlTraining);

   conn.query(sqlTraining, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

app.get('/getTrainingByStream', function (req, res) {

	var sqlTraining_1 = "select subject_name from sub_master where subject_stream = '" +req.query.stream+"'" ;
	console.log(sqlTraining_1);

	//var sqlTraining = "select * from training_course_master where subject_ids like '%" +req.query.subject+"%'" ;
	//console.log(sqlTraining);

	conn.query(sqlTraining_1, function (error, results, fields) {
	  if (error) throw error;


	 var result =  JSON.parse(JSON.stringify(results)) ;//JSON.parse(results_json);
	  
	  strsubjects = '';


		for (var i = 0; i < result.length; i++) {
			strsubjects += result[i].subject_name+",";

		}
		strsubjects = strsubjects.replace(/,\s*$/, "");
		console.log(strsubjects);

		sqlTraining_1 = "SELECT * FROM `training_course_master` where subject_ids like '%"+strsubjects+"%'"
	  	
		conn.query(sqlTraining_1, function (error, results, fields) {

	  	if (error) throw error;

	  		res.end(JSON.stringify(results));
		})
	

	});
});

app.get('/getTrainingByType', function (req, res) {

	var sqlTraining = "select * from training_course_master where type_id = '" +req.query.type+"'" ;
	console.log(sqlTraining);

   conn.query(sqlTraining, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


//rest api to create a new customer record into mysql database
app.post('/add_subject', function (req, res) {
	console.log("add subject");
	res.writeHead(200,{'Content-Type':'text/html'});
	var subject_name  = req.query.subject_name;
	var subject_stream  = req.query.subject_stream;
	var subject_created_at  = new Date();
	var subject_updated_at = new Date();
	var subject_modified_user_id = req.query.user_id;

	if(subject_modified_user_id !=1){
		res.end(JSON.stringify("Access Denied"));

	}

//	console.log(params);
//   conn.query('INSERT INTO sub_master SET ?', params, function (error, results, fields) {
	let sql = 'INSERT INTO sub_master(subject_name,subject_stream,subject_created_at,subject_updated_at,subject_modified_user_id) VALUES (?,?,?,?,?)';
	conn.query(sql, [subject_name,subject_stream,subject_created_at,subject_updated_at,subject_modified_user_id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});
//rest api to create a new customer record into mysql database
app.post('/add_training', function (req, res) {
	console.log("add training");
	res.writeHead(200,{'Content-Type':'text/html'});
	var training_name  = req.query.training_name;
	var subject_ids  = req.query.subject_ids;
	var type_id = req.query.type_id;
	var created_at  = new Date();
	var udated_at = new Date();
	var training_mod_by_user_id = req.query.user_id;
	if(training_mod_by_user_id !=1){

		
		res.end(JSON.stringify("Access Denied"));

	}


//	console.log(params);
//   conn.query('INSERT INTO sub_master SET ?', params, function (error, results, fields) {
	let sql = 'INSERT INTO training_course_master(training_name,subject_ids,type_id,created_at,udated_at,training_mod_by_user_id) VALUES (?,?,?,?,?,?)';
	conn.query(sql, [training_name,subject_ids,type_id,created_at,udated_at,training_mod_by_user_id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});

var server = app.listen(3000, "127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
});
