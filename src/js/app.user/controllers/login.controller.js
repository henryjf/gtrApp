function LoginController (UserService, $cookies) {

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
    });
  }

}

LoginController.$inject = ['UserService', '$cookies'];
export { LoginController };
