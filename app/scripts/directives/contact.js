'use strict';

angular.module('yeomanContactsApp')
  .directive('contact', function () {
    return {
      template: 'views/contactDirective.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.addClass('contact');
      }
    };
  });
