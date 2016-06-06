function LoginController (UserService, $cookies, $state) {

  let vm = this;

  vm.loginUser = loginUser;

  function loginUser (user) {
    UserService.login(user).then( (res) => {

      let user = {
        name: res.fullName,
        id: res.userId,
        email: res.username,
        token: res.access_token
      };
      $cookies.putObject('user', user);
      $state.go('root.list')
    });
  }

}

LoginController.$inject = ['UserService', '$cookies', '$state'];
export { LoginController };
