'use strict';
var user = {
  userID: null,
  currentToken: null,
  admin: false
};
var callerId, songId, singingId;

var shsHelpers = {
  wrap: function (root, formData) {
    var wrapper = {};
    wrapper[root] = formData;
    return wrapper;
  },

  form2object: function(form) {
    var data = {};
    $(form).find('input').each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
        data[$(this).attr('name')] = $(this).val();
      }
    });
    return data;
  },

  getRoute: function(data){
    var route;

    if ('caller' in data){
     route = "/callers/" + data.caller.id;
     console.log(route);
    } else if ('singing' in data){
      route = "/singings/" + data.singing.id;
    } else if ('song' in data)
      route = "/songs/" + data.song.id;
    return route;
  },

  errorHandler: function(error, data){
     console.log(error);
  },

  validatePassword: function(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  },

  removeMessage: function() {
    setTimeout(function(){
      $("#registerMessage").text("");
    }, 5000);
  } 
};


 var getCallsbySinging = function(error, data){
    var cb = function(error, data) {
      if (error) {
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
      }  else {
        $('#result').val(JSON.stringify(data, null, 4));
        displayCallsBySinging(data);
      }
    };
    var route;
    if (error){
      shsHelpers.errorHandler(error);
      return;
    }
    else {
      $('#result').val(JSON.stringify(data, null, 4));
      route = shsHelpers.getRoute(data);
      shsapi.getCalls(route, cb);
    }
  };


$(document).ready(function(){

 var callback = function callback(error, data) {
    if (error) {
      console.log(error);
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
  };

  var getCallsbyCaller = function(error,data){
    var cb = function(error, data) {
      if (error) {
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
      }  else {
        $('#result').val(JSON.stringify(data, null, 4));
        displayCallsByCaller(data);
      }
    };
    var route;
    if (error){
      shsHelpers.errorHandler(error);
      return;
    }
    else {
      $('#result').val(JSON.stringify(data, null, 4));
      route = shsHelpers.getRoute(data);
      shsapi.getCalls(route, cb);
    }
  };

  var getCallsbySong = function(error, data){
    var cb = function(error, data) {
      if (error) {
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
      }  else {
        $('#result').val(JSON.stringify(data, null, 4));
        displayCallsBySong(data);
      }
    };
    var route;
    if (error){
      shsHelpers.errorHandler(error);
      return;
    }
    else {
      $('#result').val(JSON.stringify(data, null, 4));
      route = shsHelpers.getRoute(data);
      console.log(route);
      shsapi.getCalls(route, cb);
    }
  };

  var editSingingFormSubmit = function(e){
    e.preventDefault();
    var editedSingingData = shsHelpers.wrap('singing', shsHelpers.form2object(this));
    console.log("editedSinging " + editedSingingData);
    console.log("id= " + editSingingData.singing_id);
    console.log("token=" + user.currentToken);
    shsapi.editSinging(editSingingData.singing_id, editSingingData, user.currentToken, displayCallsBySinging);
  };

  $('#callerSearch').on('submit', function(e) {
    e.preventDefault();
    console.log(event.target['name'].value);
    var params = "?name=" + event.target['name'].value;
    //console.log(caller);
    shsapi.getCallerId(params, getCallsbyCaller);
  });


  $('#songSearch').on('submit', function(e) {
    e.preventDefault();
    var params = "?number=" + event.target['number'].value;
    console.log(params);

    shsapi.getSongId(params, getCallsbySong);
  });

  $('#singingSearch').on('submit', function(e) {
    var cb = function(error, data) {
      if (error) {
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
      }  else {
        $('#result').val(JSON.stringify(data, null, 4));
        displaySingings(data);
      }
    };
    e.preventDefault();
    var params = "?name=" + event.target['name'].value;
    console.log(params);
    shsapi.getSingingsByName(params, cb);
  });

  $(".seeCalls").on("click", function(e){
    console.log("YOu clicked a row!")
    e.preventDefault();
    var singing_id= event.target['singing_id'].val();
    console.log(params);
    shsapi.getSingingsByName(params, cb);
  });

  $('#allCallersButton').on('click', function(e){
    var cb = function(error, data) {
      if (error) {
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
      }  else {
        $('#result').val(JSON.stringify(data, null, 4));
        displayCallers(data);
      }
    };
    e.preventDefault();
    shsapi.getCallers(cb);
  });

 $("#createSingingForm").on('submit', function(e){
    e.preventDefault();
    var singing_data = shsHelpers.wrap("singing", shsHelpers.form2object(this));
    singing_data.singing["book"] = $("#bookSelect option:selected").val();
    singing_data.singing["csv"] = $("#csv").val();
    
    var cb = function(error, data) {
      if (error) {
        console.log("this is the error object",  error);
        $("#registerMessage").text(error.jqxher.responseText);
        shsHelpers.removeMessage();
      return;
      }  else {
       console.log("data from server" + JSON.stringify(data, null, 4));
        displayCallsBySinging(data);
      }
    };
    shsapi.createSinging(singing_data, cb);
  });


  $('#loginForm').on('submit', function(e){
    e.preventDefault();
    var credentials = shsHelpers.wrap('credentials', shsHelpers.form2object(this));
    console.log(credentials);
    var cb = function (error, data) {
      if (error){
        shsHelpers.errorHandler(error);
        return false;
      }
      $("#loginForm").hide();
      $("#register").hide();
      $("#logout").show();
      $("#createSingingForm").show();

      user.currentToken = data.user.token;
      user.userID = data.user.id;
      user.admin = data.user.admin;
    };

    shsapi.login(credentials, cb);
    return false;
  });

  $('#logout').on('submit', function(e){
    var cb = function(error, data){
      if (error) {
        $('#result').val('status: ' + error.status + ', error: ' +error.error);
        return false;
      }  else {
        user.currentToken = null;
        user.userID = null;
        $("#loginForm").show();
        $("#register").show();
        $("#logout").hide();
        $("#createSingingForm").hide();
      }
    };
    e.preventDefault();
    shsapi.logout(cb);
    return false;
  });

  //password validation
  var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

  password.onchange = shsHelpers.validatePassword;
  confirm_password.onkeyup = shsHelpers.validatePassword;


   $('#register').on('submit', function(e) {
    e.preventDefault();
    var credentials = shsHelpers.wrap('credentials', shsHelpers.form2object(this));
    console.log(credentials);
    shsapi.register(credentials, function(err, data){
      if (err) {
        console.log(err);
      }
      else {
        $("#registerMessage").text("You have been registered!");
        shsHelpers.removeMessage();
      }
    }
    );
    return false;
  });

});
