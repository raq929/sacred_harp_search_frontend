'use strict';

$(document).ready(function(){

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
      $('#callerSearch').hide();

    };
    e.preventDefault();
    //send data to server
  });

  $('#loginButton').on('click', function(e){
    var user = wrap('user', form2object(this));
    console.log(user);
    var cb = function (error, data) {
      if (error){
        errorHandler(error);
        return;
      }
      errorHandler(null, data);

    };
  });

});
