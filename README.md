# pro_test
Required Express,mysql,jsonwebtoken installation
Import sql file in phpmyadmin 

postman end points


http://127.0.0.1:3000/getTrainingByType?type=Basic ,

http://127.0.0.1:3000/getAllsubjects?order=desc&pagesize=10 ,

order by subject name and pagesize passed as parameter


http://127.0.0.1:3000/getAllsubjects? ,

http://127.0.0.1:3000/getTrainings ,

http://127.0.0.1:3000/getTrainingByStream?stream=Arts ,
get data by stream

http://127.0.0.1:3000/getTrainingBySubject?subject=English , 
get training name by subject

http://127.0.0.1:3000/add_subject?subject_name=F1&subject_stream=Science&user_id=1 , 
add subject req following params <subject_name,subject_stream,user_id>

http://127.0.0.1:3000/add_training?training_name=Computer Tech&subject_ids=English,Economics&type_id=Basic&user_id=2
add subject req following params <training_name,subject_ids,type_id,user_id>

#================================================

#user_id = 1 assuming admin_role who can access all links add/get

#other user_id != 1 just able to see get request

generated access token using jwt which will validate UI part 
http://127.0.0.1:3000/getToken?user_id=1

Scope of improvement is there like validate data passed from url, directory structure, etc..
