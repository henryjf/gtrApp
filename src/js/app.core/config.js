function config ($stateProvider, $urlRouterProvider, BackandProvider) {

  BackandProvider
  .setSignUpToken ('4589146e-f5b8-4a83-a04d-36f602214779')
  .setAppName('gtrapp')
  ;

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as vm'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html'
    })

}

config.$inject = ['$stateProvider', '$urlRouterProvider', 'BackandProvider'];
export { config };
