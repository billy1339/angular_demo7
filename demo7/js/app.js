// initialize the app
angular.module('Demo', [
    'ngRoute'
]);

angular.module('Demo').run(function(TitleFactory, UserFactory) {
    TitleFactory.fetch();
    UserFactory.fetch();
});




