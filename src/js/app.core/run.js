function run ($rootScope, UserService) {

  $rootScope.$on('$stateChangeSuccess', (event, state) => {
    UserService.checkAuth(state.name);
  });

};



run.$inject = ['$rootScope', 'UserService'];
export { run };
