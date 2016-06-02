
//passing in userservice so we have access to login information
function NavController (UserService) {

  let vm = this;

  vm.logout = logout;

  function logout() {
    UserService.logout();
  }

}

NavController.$inject = ['UserService'];
export { NavController };
