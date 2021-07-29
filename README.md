# pro_test
Required Express,mysql installation
Import sql file in phpmyadmin 
postman end points
http://127.0.0.1:3000/getTrainingByType?type=Basic
http://127.0.0.1:3000/getAllsubjects?order=desc&pagesize=10
http://127.0.0.1:3000/getAllsubjects?
http://127.0.0.1:3000/getTrainings
http://127.0.0.1:3000/getTrainingByStream?stream=Arts
http://127.0.0.1:3000/getTrainingBySubject?subject=English
http://127.0.0.1:3000/add_subject?subject_name=F1&subject_stream=Science&user_id=1
http://127.0.0.1:3000/add_training?training_name=Computer Tech&subject_ids=English,Economics&type_id=Basic&user_id=2

user_id = 1 assuming admin_role who can access all links add/get
other user_id!=1 just able to see get content

