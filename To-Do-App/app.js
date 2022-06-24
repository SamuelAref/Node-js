let express = require('express');
let todoController = require('./controllers/todoController');


let app = express();


//setup template engine 

app.set('view engine', 'ejs');

//static files to find files from url request

app.use(express.static('./public'))


//fire controllers

todoController(app)


//listen to port 

app.listen(3000);

console.log('listening 3000');

