"use strict"
//takes a data set and displays it in the table
var song_names = {
  131: "Messiah",
  146: "Hallelujah",
  136: "Jefferson",
  178: "Africa"
};
var dataCaller = {
  "calls": [
    {
      "song": {
        "number": "146",
        "name": "Hallelujah"
      },
      "singing": {
        "name": "Ohio State Convention",
        "location": "Dayton, Ohio",
        "date": "2005-02-27"
      },
      "caller": "Rachel Stevens"
    },
    {
      "song": {
        "number": "146",
        "name": "Hallelujah"
      },
      "singing": {
        "name": "Western Mass Convention",
        "location": "Amherst, MA",
        "date": "2013-08-13"
      },
      "caller": "Rachel Stevens"
    }
  ]
};

var dataSongs = {"calls":[{"song":{"number":"146","name":"Hallelujah"},"singing":{"name":"Ohio State Convention","location":"Dayton, Ohio","date":"2005-02-27"},"caller":"Rachel Stevens"},{"song":{"number":"146","name":"Hallelujah"},"singing":{"name":"Western Mass Convention","location":"Amherst, MA","date":"2013-08-13"},"caller":"Rachel Stevens"},{"song":{"number":"146","name":"Hallelujah"},"singing":{"name":"Pioneer Valley Singing","location":"Northampton, MA","date":"2011-05-23"},"caller":"Myles Dakan"}]};



 // callsByCallerTemplate= Handlebars.compile($('#callsByCaller').html()),
 // callsBySongTemplate= Handlebars.compile($('#callsBySong').html()),



var displayCallsByCaller = function(data){
  var callsByCallerTemplate= Handlebars.compile($('#callsByCaller').html());
  var newHTML = callsByCallerTemplate(data);
  $("#putCallsByCallerHere").html(newHTML);
};

var displayCallsBySong = function(data){
  var callsBySongTemplate= Handlebars.compile($('#callsBySong').html());
  var newHTML = callsBySongTemplate(data);
  $("#putCallsBySongHere").html(newHTML);
};

var displayCallsBySinging = function(data){
  var callsBySongTemplate= Handlebars.compile($('#callsBySinging').html());
  var newHTML = callsBySingingTemplate(data);
  $("#putCallsBySingingHere").html(newHTML);
};

// var dd =  {

//  // createSongString: function(memo, song){
//  //     memo += "<tr><td>" + song.number + "</td><td>" + song.name + "</td><td>" + singing.name + "</td><td>" + singing.singing.location + "</td><td>" + singing.year + "</td>";
//  //     return memo;
//  //  },

//   callsByCallerTemplate: Handlebars.compile($('#callsByCaller').html()),
//   callsBySongTemplate: Handlebars.compile($('#callsBySong').html()),

  // var newHTML = callsByCallerTemplate(dataCaller);
  // var newHTML2 = callsBySongTemplate(dataSongs);


  // $("#putCallsByCallerHere").html(newHTML);


  // $("#putCallsBySongHere").html(newHTML2);

  // var postData = function(data){
  //   $("#Caller h4").text(data.caller.first_name + ' ' + data.caller.surname);
  //   var clearSongs = "";
  //   $("#callerTable .tableBody").html(clearSongs);
  //   $("#callerTable").append(data.calls.reduce(createSongString, ''));

  // };

  // postData(data);
// }


