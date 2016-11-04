
var app = require('./server');

var db = app.get('db');

module.exports = {

  //------PRODUCTS ENDPOINT FUNCTIONS---------
    getAll: function(req, res){
        db.read_products(function(err, products){
          res.json(products);

        })
    },

    getOne: function(req, res) {
      db.read_product([req.params.id], function(err, product) {
        res.send(product);

      })
    },

    create: function(req, res) {
      db.create_product([req.body.name, req.body.price,  req.body.desc, req.body.imgURL],
        function(err, product) {
        res.json(req.body.name + " Was added to Products");
        console.log(req.body.name + "Product was added correctly!");
      })
    },

    destroy: function(req, res) {
      db.delete_product([req.params.id], function(err, products) {
        console.log( products )
        res.json("Product with an id of " + req.params.id + " has been deleted")
      })
    },

    update_description: function(req, res) {
      var id = req.params.id;
      var desc = req.body.desc;
      db.update_description([id, desc], function(err, products) {
        res.send( "The new description for product id " + id + " is: "  + desc + "." )
      })
    },

    update_price: function(req, res) {
      var id = req.params.id;
      var price = req.query.price;
      db.update_price([id, price], function(err, products) {
        console.log(id, price)
        res.send( "The new Price for productid " + id + " is now: " + price )
      })
    },

    //-------USER ENDPOINTS--------
    new_user: function(req, res) {
      db.new_user(
        [
          req.body.username,
          req.body.password,
          req.body.email,
          req.body.first_name,
          req.body.last_name,
          req.body.phone_number,
          req.body.address_street,
          req.body.address_city,
          req.body.address_zip,
          req.body.address_state
        ],

        function(err, user) {
          if(err) console.log(err, "This was not completed correctly");
        res.json(req.body.username + " has been added as a new user!");
      })
      console.log(req.body);
    },




}
