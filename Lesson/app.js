let express = require('express');
let bodyParser = require('body-parser')

let app = express();


let urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine', 'ejs'); //tell express we want to use ejs, then we create a view folder 


app.use('/assets', express.static('assets')); // we can use the css files this way

app.get('/', function (req, res) {


    res.render('index');

});

app.get('/contact', function (req, res) {

    // console.log(req.query);


    res.render('contact', { qs: req.query });

});

app.post('/contact', urlencodedParser, function (req, res) {

    console.log(req.body);

    res.render('contact-success', { data: req.body });

});

app.get('/profile/:id', function (req, res) {

    let data = { age: 29, job: 'ninja', hobbies: ['eating', 'running', 'fishing'] };

    res.render('profile', { person: req.params.id, data: data }); //no need to specify path because it knows to look in view folder 
    // so we sent the data id to the profile file  and look at how we outputed the data in profie file we opened <%= profile %>
});




app.listen(3000); //listen to port