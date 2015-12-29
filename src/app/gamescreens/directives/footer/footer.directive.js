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
      controller: 'FooterController',
      controllerAs: 'fc',
      link: function () {

      }
    };
  }
})();
