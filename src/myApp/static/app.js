var app = angular.module('myApp',['ngResource']);

app.controller('ResourceController', function($scope, $http, Entry) {


//  var req = Entry.get();
  // req.success(function(data){
  // 	console.log(data)
  // });

  var entry = Entry.get({ id: '1' }, function() {
    console.log(entry);
  });
});

app.factory('Entry', function($resource) {
  return $resource('http://127.0.0.1:8000/api/entries/:id/?format=json');
});