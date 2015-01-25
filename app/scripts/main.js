(function() {
  'use strict';
  /* jshint devel:true */

  var app = angular.module('WhoIsIn', ['firebase', 'chart.js'])
    .constant('FBURL', 'https://rpibeacon.firebaseio.com/users');

  app.factory('People', ['$firebase', 'FBURL', function($firebase, FBURL) {
    var ref = new Firebase(FBURL);
    var sync = $firebase(ref);
    return sync.$asArray();
  }]);

  app.controller('TotalChartCtrl', ['$scope', 'People', function($scope, People) {

    $scope.people = People;
    $scope.people.$loaded().then(function(people) {
      console.log(people.length); // data is loaded here
    });

  }]);

  app.controller('BoysNGirlsChartCtrl', ['$scope', function($scope) {

  }]);


  app.controller('PeopleCtrl', ['$scope', 'People',
    function($scope, People) {

      $scope.people = People;

    }
  ]);

})();
