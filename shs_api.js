"use strict"

var shsapi = {

  shs: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: this.shs + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: this.shs + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  logout: function(callback) {
    this.ajax({
      method: 'DELETE',
      url: this.shs + '/logout/' + user.userID,
      headers: {
        Authorization: 'Token token=' + user.currentToken
      }
    }, callback);
  },

  //Authenticated api actions
  getCallerId: function (params, callback) {
    this.ajax({
      method: 'GET',
      url: this.shs + '/callers' + params,
      headers: {
        "Content-Type": "application/json"
      },
      dataType: 'json'
    }, callback);
  },

   getSongId: function (params, callback) {
    this.ajax({
      method: 'GET',
      url: this.shs + '/songs' + params,
      headers: {
        "Content-Type": "application/json"
      },
      dataType: 'json'
    }, callback);
  },

  getSingingId: function (params, callback) {
    this.ajax({
      method: 'GET',
      url: this.shs + '/singings' + params,
      headers: {
        "Content-Type": "application/json"
      },
      dataType: 'json'
    }, callback);
  },

  getCalls: function(route, callback){
    this.ajax({
      method: 'GET',
      url: this.shs + route + '/calls/',
      dataType: 'json'
    }, callback);
  },

  getCallers: function(callback){
   this.ajax({
      method: 'GET',
      url: this.shs + '/callers/',
      dataType: 'json'
    }, callback);
 },


  createSinging: function (data, callback) {
    var json_string = JSON.stringify(data);
    console.log(json_string);

    this.ajax({
      method: 'POST',
      url: this.shs + '/singings',
      headers: {
        Authorization: 'Token token=' + user.currentToken
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      dataType: 'json',
    }, callback);
  },

  editSinging: function (id, data, token, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.shs + '/singings/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      dataType: 'json'
    }, callback);
  },

};
