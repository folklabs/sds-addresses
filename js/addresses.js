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
      var ctl = this;
      // ctl.addresses = {};
      // ctl.addresses.data = ['foo', 'bar'];
      // $scope.testData = ['baz'];
      $scope.addresses = {};
      $scope.addresses.data = [];
      $scope.addresses.message = '';
      // $scope.data = [];
      console.log($scope.testData);

      $scope.addressSearch = function(item, $event) {
        var responsePromise;
        console.log($scope.addresses.search);
        console.log($event);

        var config = {
          // method: 'POST',
          // url: 'http://example.com',
          headers: {
           'Authorization': 'Bearer ' + AUTH_TOKEN
          },
          // data: { test: 'test' }
        }

        responsePromise = $http.get(QUERY_URL + $scope.addresses.search, config);
        responsePromise.then(function(response) {
          console.log(response);
          console.log(response.data[0]);
          $scope.addresses.data = response.data;
          console.log($scope.addresses.data);
          // scope.$apply();
        }, function(response) {
          return $scope.addresses.message = "No addresses found.";
        });

        // scope.$apply();
      };
    }
  ]);
}());

