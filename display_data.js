//takes a data set and displays it in the table
var song_names = {
  131: "Messiah",
  146: "Hallelujah"
};
var data = {
  caller: {first_name: "Myles", surname: "Dakan"},
  songs: [
  {number: 146, singing: "Ohio State Convention",state: "OH",year: 2005},
  {number: 131, singing: "Boston All-Day", state: "MA", year: 2014}]
};

$(document).ready(function(){
  $("#myTab #Caller").tab('show'); // show first tab
  $("#myTab #Song").tab('show');
  $("#myTab #Admin").tab('show');


  $("#songTable").tablesorter();
  $("#callerTable").tablesorter();
  var createSongString = function(memo, song){
     memo += "<tr><td>" + song.number + "</td><td>" + song_names[song.number] + "</td><td>" + song.singing + "</td><td>" + song.state + "</td><td>" + song.year;
     return memo;
  };

  var postData = function(data){
    $("#Caller h4").text(data.caller.first_name + ' ' + data.caller.surname);
    $("#callerTable").append(data.songs.reduce(createSongString, ''));

  };

  postData(data);

  });
