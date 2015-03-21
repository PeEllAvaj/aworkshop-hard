var app = angular.module('gameControllers', []);

app.controller('MainCtrl', function($scope, $firebaseArray) {
  var ref = new Firebase("https://angularworkshophard.firebaseio.com/players");
  $scope.playerList = $firebaseArray(ref);


  $scope.create = function() {
    $scope.playerList.$add({
      'name': $scope.newName,
      'score': 0
    });
  };

  $scope.increase = function(player) {
    player.score++;
    $scope.playerList.$save(player)
  }
});
