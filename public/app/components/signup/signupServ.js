angular.module("ecommerce")
  .service("signupServ", function($http, $q) {
  // CRUD FUNCTIONS
  // ============================================================
  // this.getCollection = function(id) {
  //   var query = "";
  //   if (id) query = '?_id=' + id;
  //   return $http({
  //     method: 'GET',
  //     url: '/collection' + query
  //   }).then(function(response) {
  //     if (response.data.length < 2) return response.data[0];
  //     return response.data;
  //   });
  // };
  this.newUser = function(user) {
    console.log("this was clicked");
    console.log(user);
    return $http({
      method: 'POST',
      url: '/newUser',
      data: user
    }).then(function(response) {
      return response;
    });
  };




  // --------FORM VALIDATION FUNCTIONS-----------
  function formValidation(user) {
    var userPass = user.password;
    var userName = user.username;
    var ucity = user.address_city;
    var userZip = user.address_zip;
    var userEmail = user.email;
    var userStreet = user.address_street;

    if(userPass_validation(userPass,7,12)) {

      if(allLetter(userName)) {

        if(allnumeric(userZip)) {

          if(validateEmail(userEmail)) {

            if(alphanumeric(userStreet)) {

            }
          }
        }
      }
    }
  return false;
  };

  //----Name validation---------
  function allLetter(userName) {
    var letters = /^[A-Za-z]+$/;
    if(userName.value.match(letters)) {
      return true;
    }
    else {
      alert('Username cannot contain special characters');
      // userName.focus();
      return false;
    }
  };

  //----email validation-------
  function validateEmail(userEmail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(userEmail.value.match(mailformat)) {
      return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    // userEmail.focus();
    return false;
    }
  };

  //----password validation------
  function userPass_validation(userPass,mx,my) {
    var userPass_len = userPass.value.length;
    if (userPass_len == 0 ||userPass_len >= my || userPass_len < mx){
      alert("Password should not be empty / length be between "+mx+" to "+my);
      // userPass.focus();
      return false;
      }
      return true;
  };

  //----number validation------
  function allnumeric(userZip) {
    var numbers = /^[0-9]+$/;
    if(userZip.value.match(numbers)) {
      return true;
    } else {
        alert('ZIP code must have numeric characters only');
        // userZip.focus();
        return false;
      }
  };

  //----street address validation------
  function alphanumeric(userStreet) {
    var letters = /^[0-9a-zA-Z]+$/;
    if(userStreet.value.match(letters)) {
      return true;
    } else {
        alert('User address must have alphanumeric characters only');
        // userStreet.focus();
        return false;
      }
  };


});
