(function() {
  'use strict';

  angular
      .module('spacetradenode')
      .directive('headerDir', headerDirective);

  /** @ngInject */
  function headerDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/gamescreens/directives/header/header.directive.html',
      scope: {
        activeElement: '=?'
      },
      controller: 'headerCtrl',
      controllerAs: 'hc',
      link: function (scope, el, attr, ngModel) {

      }
    };
  }
})();
