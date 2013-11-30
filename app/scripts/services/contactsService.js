'use strict';

angular.module('yeomanContactsApp').factory('ContactsService',
  ['$q', function ($q) {
    Parse.initialize('YOUR_KEY', 'YOUR_TOKEN');
    return function(successCb, errorCb) {
      var query = new Parse.Query('Contact'),
                  delay = $q.defer(),
                  data = null;
        query.find({
          success: function (results) {
            data = results.map (function(obj) {
              return {
                id: obj.id,
                name: obj.get('name'),
                phone: obj.get('phone'),
                website: obj.get('website'),
                email: obj.get('email'),
                avatar: 'http://www.gravaar.com/avatar/'
                    + calcMD5(obj.get('email'))
              }
            });
            if (successCb) {
              successCb(data);
            } else {
              delay.resolve(data);
            }
          },
          error: function (error) {
            if (errorCb) {
              errorCb(error);
            }
            delay.reject(error);
          }
        });
      return delay.promise;
    }
  }]);
