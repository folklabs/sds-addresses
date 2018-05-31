/*global angular */
(function() {
  'use strict';
  var QUERY_URL = "https://address.digitalservices.surreyi.gov.uk/addresses?postcode=";
  var AUTH_TOKEN = "SDS_API_KEY";

  var addressesApp;

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
          $scope.addresses.message = (response.data.length == 0) ? 'No addresses found for ' + $scope.addresses.query + '.' : '';
        }, function(response) {
          var statusCode = response.status;
          $scope.addresses.isShowMessage = true;
          $scope.addresses.messageClass = 'danger';
          $scope.addresses.data = [];
          switch (statusCode) {
            case 429:
              $scope.addresses.message = 'Sorry, the maximum number of searches per day has been exceeded.';
              break;
            default:
              $scope.addresses.message = 'Sorry, there was an error whilst searching. [' + response.statusText + ']';
          }
        });
      };
    }
  ]);
}());
