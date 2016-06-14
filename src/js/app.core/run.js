function run ($rootScope, UserService) {

  $rootScope.$on('$stateChangeSuccess', (event, state) => {
    // UserService.checkAuth(state.name);
  if (UserService.checkAuth(event, state) ) {
    UserService.authChanged('authenticated');
    $state.go('root.home');
  } else {
    UserService.authChanged('un-authenticated');
    $state.go('root.login');
  }
});
};



run.$inject = ['$rootScope', 'UserService'];
export { run };
