(function() {

  var QUERY_URL = "http://ec2-52-30-16-168.eu-west-1.compute.amazonaws.com:9700/locate/addresses?postcode=";
  var AUTH_TOKEN = "rPMK0uHF5zuHmYOULEEP8uWs44g";

  var addresses;

  addressesApp = angular.module('addressesApp', []);

  addressesApp.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
  });
  
  addressesApp.controller("AddressesController", [
    '$scope', '$http', function($scope, $http) {
      $scope.addresses = {};
      $scope.addresses.data = [];
      $scope.addresses.isShowMessage = false;

      $scope.addressSearch = function(item, $event) {
        var responsePromise;
        var config = {
          headers: {
           'Authorization': 'Bearer ' + AUTH_TOKEN
          },
        }

        responsePromise = $http.get(QUERY_URL + $scope.addresses.search, config);
        responsePromise.then(function(response) {
          $scope.addresses.data = response.data;
          $scope.addresses.isShowMessage = (response.data.length == 0);
        }, function(response) {
          return $scope.addresses.message = "Error in searching for address data.";
        });
      };
    }
  ]);
}());

