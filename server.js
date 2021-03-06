//---------Req---------
var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');
var passwords = require('./config');


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


var connectionString = passwords.password;
var massiveinstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveinstance);
var db = app.get('db');


var servCtrl = require('./servCtrl');
//---------- Products EndPoints -----------
app.post('/products', servCtrl.create);
app.get('/products', servCtrl.getAll);
app.get('/products/:id', servCtrl.getOne);
app.put('/products/update/description/:id', servCtrl.update_description);
app.put('/products/update/price/:id', servCtrl.update_price);
app.delete('/products/delete/:id', servCtrl.destroy);

//---------User Endpoints------
app.post('/newUser', servCtrl.new_user);
// app.login('/user', servCtrl.login)

//----------Server------------
app.listen('3232', function(){
  console.log("Successfully listening on port 3232")
});
