
//passing in userservice so we have access to login information
function NavController ($rootScope, UserService) {

  let vm = this;

  vm.isAuthenticated = false;
  vm.logout = logout;

  function logout() {
    UserService.logout();
  }

  $rootScope.$on('authChanged', function (event, stat) {
    if (stat === 'authenticated') {
      vm.isAuthenticated = true;
    } else {
      vm.isAuthenticated = false;
    }
  });

}

NavController.$inject = ['$rootScope', 'UserService'];
export { NavController };
