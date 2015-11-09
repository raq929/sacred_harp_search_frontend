'use strict';
var userID, currentToken;


$(document).ready(function(){

 var callback = function callback(error, data) {
    if (error) {
      console.log(error);
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
  };

  var form2object = function(form) {
    var data = {};
    $(form).find('input').each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
        data[$(this).attr('name')] = $(this).val();
      }
    });
    return data;
  };

 var wrap = function wrap(root, formData) {
    var wrapper = {};
    wrapper[root] = formData;
    return wrapper;
  };

  var errorHandler = function (error, data) {
    if (error) {
      console.log(error);
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
  };

  $('#callerSearch').on('submit', function(e) {

    var caller = wrap('caller', form2object(this));
    console.log(caller);
    var cb = function (error, data) {
      if (error){
        errorHandler(error);
        return;
      }
      errorHandler(null, data);
    };
    e.preventDefault();
    shsapi.getCaller(cb);
  });

  $('#loginForm').on('submit', function(e){
    var credentials = wrap('user', form2object(this));
    console.log(credentials);
    var cb = function (error, data) {
      if (error){
        errorHandler(error);
        return;
      }
      errorHandler(null, data);
      $('#loginForm').hide();
      console.log('' + data.user.token)
      currentToken = data.user.token;
      userID = data.user.id;
    };
    e.preventDefault();
    tttapi.login(credentials, cb);
    return false;
  });


   $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    shsapi.register(credentials, callback);
    e.preventDefault();
    return false;
  });

});
