angular.module("ecommerce")
  .service("signupServ", function($http, $q, $location) {
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
  this.formValidation = function(user) {
    var userPass = user.password;
    var userName = user.username;
    var firstName = user.first_name;
    var lastName = user.last_name;
    var ucity = user.address_city;
    var userZip = user.address_zip;
    var userEmail = user.email;
    var userStreet = user.address_street;

    const validPass = userPass_validation(userPass);
    const validUsername = alphanumeric(userName);
    const validFName = allLetter(firstName);
    const validLName = allLetter(lastName);
    const validEmail = validateEmail(userEmail);
    const validZip = allnumeric(userZip);
    const validSt = alphanumeric(userStreet);

    console.log(validPass);
    console.log(validUsername);
    console.log(validFName);
    console.log(validLName);
    console.log(validEmail);
    console.log(validZip);
    if (
      validPass&&
      validUsername&&
      validFName&&
      validLName&&
      validEmail&&
      validZip
    ) {

      console.log("New user created");
      return true;
    }
    console.log("Error");
    return false;

  };


  //----Name validation---------
  function allLetter(userName) {
    console.log(userName);
    var letters = /^[A-Za-z]+$/;
    if(userName.trim().match(letters)) {
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
    console.log(userEmail);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(userEmail.match(mailformat)) {
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
    function userPass_validation(userPass) {
        var p = userPass,
            errors = [];
        if (p.length < 8) {
            errors.push("Your password must be at least 8 characters");
        }
        if (p.search(/[a-z]/i) < 0) {
            errors.push("Your password must contain at least one letter.");
        }
        if (p.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit.");
        }
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }
        return true;
    }

  //----number validation------
  function allnumeric(userZip) {
    return !/\D/.test(userZip.trim());
    console.log(userZip);
  };

  //----alphanumeric validation------
  function alphanumeric(userStreet) {
    return !/\W/.test(userStreet.trim());
  };

  //-------If fields are validated create user
    this.executeNewUser = function(user) {
      if ( this.formValidation(user) === true ) {
        this.newUser(user);
        $location.path('/');
      }
    }


});
