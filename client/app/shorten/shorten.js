angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url:''};
  $scope.loading = false;
  $scope.addLink = function(){
    $scope.loading = true;
    Links.addLink($scope.link, function(){
      $scope.loading = false;
      $scope.link.url = '';
      $location.path('/links');
    });
  };
});
