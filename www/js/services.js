angular.module('ionStock.services', [])

// .factory('stockDataService', function($q, $http) {
//
//   var deferred = $q.defer(),
//   url = "http://finance.yahoo.com/webservice/v1/symbols/" + ticker + " /quote?format=json&view=detail";
//
//   var getPriceData = function(ticker) {
//     $http.get(url)
//     .success(function(json) {
//       var jsonData = json.list.resources[0].resource.fields;
//       deffered.resolve(jsonData);
//     })
//     .error(function(error) {
//       console.log("Price data error: " + error);
//       deffered.reject();
//     });
//     return deffered.promise;
//   };
//
//   return {
//     getPriceData: getPriceData
//   };
//
// })

;
