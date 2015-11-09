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

var dataSongs = {"calls":[{"song":{"number":"146","name":"Hallelujah"},"singing":{"name":"Ohio State Convention","location":"Dayton, Ohio","date":"2005-02-27"},"caller":"Rachel Stevens"}]};



$(document).ready(function(){
  $("#myTab #Caller").tab('show'); // show first tab
  $("#myTab #Song").tab('show');
  $("#myTab #Admin").tab('show');


  $("#songTable").tablesorter();
  $("#callerTable").tablesorter();

  var createSongString = function(memo, song){
     memo += "<tr><td>" + song.number + "</td><td>" + song.name + "</td><td>" + singing.name + "</td><td>" + singing.singing.location + "</td><td>" + singing.year + "</td>";
     return memo;
  };

  var callsByCallerTemplate = Handlebars.compile($('#callsByCaller').html());
  var callsBySongTemplate = Handlebars.compile($('#callsBySong').html());

  var newHTML = callsByCallerTemplate(dataCaller);
  var newHTML2 = callsBySongTemplate(dataSongs);


  $("#putCallsByCallerHere").html(newHTML);


  $("#putCallsBySongHere").html(newHTML2);

  // var postData = function(data){
  //   $("#Caller h4").text(data.caller.first_name + ' ' + data.caller.surname);
  //   var clearSongs = "";
  //   $("#callerTable .tableBody").html(clearSongs);
  //   $("#callerTable").append(data.calls.reduce(createSongString, ''));

  // };

  // postData(data);


  });
