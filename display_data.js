"use strict"
//takes a data set and displays it in the table
var song_names = {
  131: "Messiah",
  146: "Hallelujah",
  136: "Jefferson",
  178: "Africa"
};
var data = {
  caller: {first_name: "Myles", surname: "Dakan"},
  calls: [
    {number: 146, singing: "Ohio State Convention",state: "OH",year: 2005},
    {number: 131, singing: "Boston All-Day", state: "MA", year: 2014}
    ]};

var data2 = {
  caller: {first_name:"Rachel", surname: "Stevens"},
  calls: [
  {number: 136, singing: "Western Mass Convention", state: "MA", year: 2012},
  {number: 178, singing: "Pioneer Valley All-day", state: "CT", year: 2011}
  ]};



$(document).ready(function(){
  $("#myTab #Caller").tab('show'); // show first tab
  $("#myTab #Song").tab('show');
  $("#myTab #Admin").tab('show');


  $("#songTable").tablesorter();
  $("#callerTable").tablesorter();

  var createSongString = function(memo, song){
     memo += "<tr><td>" + song.number + "</td><td>" + song_names[song.number] + "</td><td>" + song.singing + "</td><td>" + song.state + "</td><td>" + song.year + "</td>";
     return memo;
  };

  var postData = function(data){
    $("#Caller h4").text(data.caller.first_name + ' ' + data.caller.surname);
    var clearSongs = "";
    $("#callerTable").html(clearSongs);
    $("#callerTable").append(data.calls.reduce(createSongString, ''));

  };

  postData(data);


  });
