const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));



// Nimi nimi_id, meil meil_id, pass pass_id
app.post('/signup', (req, res) => {
    const { nimi_id, meil_id, pass_id } = req.index_id;
    const query = `INSERT INTO Login_data (user_name, email_id, date_of_birth, password) VALUES ('${nimi_id}', '${meil_id}', '${pass_id}')`;
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.redirect('/');
    });
  });



  app.get('/home', (req, res) => {
    res.send('Login successful');
  });
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });


//   https://medium.com/@biswajitpanda973/building-a-simple-log-in-sign-up-system-with-node-js-express-js-and-mysql-4b0c537004c