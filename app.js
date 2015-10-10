var app = angular.module('myApp',['ngResource']);

app.controller('ResourceController', function($scope, $http, Entry) {


  var req = Entry.get();
  // req.success(function(data){
  // 	console.log(data)
  // });

  // var entry = Entry.get({ id: $scope.id }, function() {
    console.log(req);
  // });
});

app.factory('Entry', function($resource) {
  return $resource('http://127.0.0.1:8000/api/places/:id/?format=json');
});