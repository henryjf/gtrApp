function LoginController (UserService, $cookies, $state) {

  let vm = this;

  vm.loginUser = loginUser;

  function loginUser (user) {
    UserService.login(user).then( (res)=> {

      let user = {
        name: res.fullName,
        id: res.userId,
        email: res.userName
      };
      $cookies.putObject('user', user);
      $state.go('root.home')
    });
  }

}

LoginController.$inject = ['UserService', '$cookies', '$state'];
export { LoginController };
