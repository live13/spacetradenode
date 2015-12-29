(function() {
  'use strict';

  angular
      .module('spacetradenode')
      .directive('footerDir', footerDirective);

  /** @ngInject */
  function footerDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/gamescreens/directives/footer/footer.directive.html',
      scope: {
        activeElement: '=?'
      },
      controller: 'footerCtrl',
      controllerAs: 'fc',
      link: function (scope, el, attr, ngModel) {

      }
    };
  }
})();
