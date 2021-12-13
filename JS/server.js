const app = require('Express');

var mysql = require('mysql');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('DB','','');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
const validate = (req) => {
    try {
    }
    catch(err) {
        console.log(err);
    }
};

app.post('/update', (req, res) => {
    const object = req.body.data;
    
    if(res.status == 200)
    {
        // pass
    }
});