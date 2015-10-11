var app = angular.module('myApp',['ngResource']);


app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});


app.controller('ResourceController', function($scope, $http, Entry) {









  var entry = Entry.get({ id: '1' }, function() {
    console.log(entry);
    $scope.entry = entry;
  });

  $scope.deleteEntry = function(entry) {
    console.log(entry);
    $scope.entry = entry;

    var entry = Entry.get({'id':entry.id},function() {
    console.log('success.!');
        entry.$delete(function() {
        console.log('deleted.!');
        },
        function(e){
            console.log('error.!');
            console.log(e);
        }
        );
    },
    function(e){
        console.log('error.!');
        console.log(e);
    });
  };

  var entries = Entry.query(function() {
    console.log('entries : ');
    console.log(entries);
    $scope.entries = entries;
  });

  $scope.AddEntry = function(entry){
      Entry.save($scope.entry, function() {
        console.log('saved');
      });
  };


//$scope.AddEntry = $scope.Entry.$save(function () {
//    alert("Entry saved!");
//});


  $scope.viewEntry = function(entry) {
    console.log(entry);
    $scope.entry = entry;

    Entry.get({'id':entry.id},function() {
        console.log('success.!');
    },
    function(e){
        console.log('error.!');
        console.log(e);
    });

  };

});

app.factory('Entry', function($resource) {
  return $resource('http://127.0.0.1:8000/api/entries/:id/');
});