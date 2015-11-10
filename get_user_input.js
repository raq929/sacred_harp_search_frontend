'use strict';
var userID, currentToken;
var callerId, songId, singingId;

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

  var getRoute = function(data){
    var route;

    if ('caller' in data){
     route = "/callers/" + data.caller.id;
     console.log(route);
    } else if ('singing' in data){
      route = "/singings/" + data.singing.id;
    } else if ('song' in data)
      route = "/songs/" + data.song.id;
    return route;
  };

  var errorHandler = function(error, data){

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
      errorHandler(error);
      return;
    }
    else {
      $('#result').val(JSON.stringify(data, null, 4));
      route = getRoute(data);
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
      errorHandler(error);
      return;
    }
    else {
      $('#result').val(JSON.stringify(data, null, 4));
      route = getRoute(data);
      console.log(route);
      shsapi.getCalls(route, cb);
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
      errorHandler(error);
      return;
    }
    else {
      $('#result').val(JSON.stringify(data, null, 4));
      route = getRoute(data);
      console.log(route);
      shsapi.getCalls(route, cb);
    }
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
    e.preventDefault();
    var params = "?name=" + event.target['name'].value
      + '&date=' + event.target['date'].value;
    console.log(params);

    shsapi.getSingingId(params, getCallsbySinging);
  });

  $('#loginForm').on('submit', function(e){
    e.preventDefault();
    var credentials = wrap('credentials', form2object(this));
    console.log(credentials);
    var cb = function (error, data) {
      if (error){
        errorHandler(error);
        return;
      }
      errorHandler(null, data);
      $('#loginForm').hide();
      console.log('' + data.user.token);
      currentToken = data.user.token;
      userID = data.user.id;
    };

    shsapi.login(credentials, cb);
    return false;
  });


   $('#register').on('submit', function(e) {
    e.preventDefault();
    var credentials = wrap('credentials', form2object(this));
    console.log(credentials);
    shsapi.register(credentials, callback);
    return false;
  });

});
