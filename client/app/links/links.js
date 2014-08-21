angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {links: []};
  $scope.getLinks = function() {
    Links.fetchAll($scope.data, function() {
      console.log($scope.data.links);
    });
  };
  $scope.getLinks();
});
