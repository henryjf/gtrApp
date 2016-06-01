function RootController(UserService) {

  let vm = this;

  vm.logOut = logOut;
  vm.copyright = '2016';

  function logOut() {
    UserService.logOut();
  }

}

RootController.$inject = ['UserService'];
export { RootController };
