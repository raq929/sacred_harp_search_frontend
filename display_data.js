"use strict"

// These are functions that receive data from the server and display it
// using jQuery and Handlebars


var displayCallsByCaller = function(data){
  var callsByCallerTemplate= Handlebars.compile($('#callsByCaller').html());
  var newHTML = callsByCallerTemplate(data);
  $("#putCallsByCallerHere").html(newHTML);
  // These functions need to happen AFTER the html loads.
  $(document).ready(function(){
    $("#callsByCallerTable").tablesorter();
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

// This stores singing data to later be used by the editSinging template
var editSingingData;

var editSingingFormSubmit = function(e){
  e.preventDefault();
  var editedSingingData = shsHelpers.wrap("singing", shsHelpers.form2object(this));
  console.log(editSingingData);
  shsapi.editSinging(editSingingData.singing_id, editedSingingData, user.currentToken, getCallsbySinging);
};


var triggerSingingFormHandler = function(e){
  e.preventDefault();
  var editSingingFormTemplate = Handlebars.compile($('#editSingingFormTemplate').html());
  var newHTML = editSingingFormTemplate(editSingingData);
  $("#putCallsBySingingHere").html(newHTML);
  $("#editSingingForm").on('submit', editSingingFormSubmit);
};

var displayCallsBySinging = function(data){

  // stores singing data for access by editSingingForm
  editSingingData = {name: data.calls[0].singing.name,
                 location: data.calls[0].singing.location,
                 date: data.calls[0].singing.date,
                 singing_id: data.calls[0].singing.id,
               };
  var callsBySingingTemplate= Handlebars.compile($('#callsBySinging').html());
  var newHTML = callsBySingingTemplate(data);
  $("#putCallsBySingingHere").html(newHTML);
  $(document).ready(function(){
    $("#triggerEditSingingForm").on('submit', triggerSingingFormHandler);
    $("#callsBySingingTable").tablesorter();
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
  // compliles and uses handlebars template
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
            console.log(JSON.stringify(data, null, 4));
            displayCallsBySinging(data);
          }
        };
        shsapi.getCalls(route, cb);
      });
    });
  };


