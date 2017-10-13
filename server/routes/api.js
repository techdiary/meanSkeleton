const express = require('express');

const router = express.Router()
var DB = require('../db');
var uri = "mongodb://aayush24:<password>@meanbeta-shard-00-00-sshqm.mongodb.net:27017,meanbeta-shard-00-01-sshqm.mongodb.net:27017,meanbeta-shard-00-02-sshqm.mongodb.net:27017/users?ssl=true&replicaSet=MEANbeta-shard-0&authSource=admin";

router.get('/', (req, res)=> {
  res.send("Api Works");
});

router.get('/todo', (req, res) => {
  var database = new DB;
  database.connect(uri)
    .then(
      ()=>{
        console.log("Successfully connected to DB");
        var cursor = database.db.collection('todos').find();
        cursor.toArray(function (err, docArr) {
          if (err){
            console.log(err);
          }
          else {
            res.json(docArr);
          }
        })
      },
      (err)=>{
        return console.log("Failed to connect to DB" + err);
      }
    )
})

module.exports = router
