angular.module('Demo', [
    'ngRoute'
]).run(function(
  $rootScope,
  $location,
  $http,
  $window,
  AuthFactory,
  UserFactory,
  TitleFactory,
  SkillsFactory
) {
  $rootScope.$on('$routeChangeStart', function(event, next) {
      if ($location.path() === '/createUser'){
      } else if (AuthFactory.isAuthenticated()) {
        $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('demo.user');
        UserFactory.fetch();
        TitleFactory.fetch();
        SkillsFactory.fetch();
    } else {
      $location.path('/login');
    }
    });
});
