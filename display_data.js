"use strict"

var singingData;

var editSingingButtonHandler = function(){
  var editSingingFormTemplate = Handlebars.compile($('#editSingingForm')).html();
  var newHTML = editSingingFormTemplate(singingData);
};

var displayCallsByCaller = function(data){
  var callsByCallerTemplate= Handlebars.compile($('#callsByCaller').html());
  var newHTML = callsByCallerTemplate(data);
  $("#putCallsByCallerHere").html(newHTML);
  $(document).ready(function(){
    $("#callsByCallerTable").tablesorter();
    $('#editSinging').on('click', editSingingButtonHandler);
  });
};

var displayCallsBySong = function(data){
  var callsBySongTemplate= Handlebars.compile($('#callsBySong').html());
  var newHTML = callsBySongTemplate(data);
  $("#putCallsBySongHere").html(newHTML);
  $(document).ready(function(){
    $("#callsBySongTable").tablesorter();
  });
};

var displayCallsBySinging = function(data){
  console.log(data)
  var callsBySingingTemplate= Handlebars.compile($('#callsBySinging').html());
  var newHTML = callsBySingingTemplate(data);
  $("#putCallsBySingingHere").html(newHTML);
  $(document).ready(function(){
    $("#callsBySingingTable").tablesorter();
    $("#e")
  });
};

var displayCallers = function(data){
  var allCallersTemplate = Handlebars.compile($('#allCallers').html());
  var newHTML = allCallersTemplate(data);
  console.log(data);
  $("#putCallsByCallerHere").html(newHTML);
  $(document).ready(function(){
    $("#allCallersTable").tablesorter();
  });
};

var displaySingings = function(data) {

  var singingsByNameTemplate = Handlebars.compile($('#singingsByName').html());
  var newHTML = singingsByNameTemplate(data);
  $("#putCallsBySingingHere").html(newHTML);
  // After the html loads, set the click handler for the buttons
  $(document).ready(function(){
    $("#singingsByNameTable").tablesorter();
    $(".seeCalls").on("click", function(event){
      event.preventDefault();
      var singing_id= $(event.target).data('singing_id');
      var route = "/singings/" + singing_id;
      var cb = function(error, data) {
        if (error) {
          $('#result').val('status: ' + error.status + ', error: ' +error.error);
          return;
          }  else {
            $('#result').val(JSON.stringify(data, null, 4));
            singingData = data;
            displayCallsBySinging(data);
          }
        };
        shsapi.getCalls(route, cb);
      });
    });
  };


