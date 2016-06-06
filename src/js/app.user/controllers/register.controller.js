function RegisterController (UserService, $cookies, $state) {

  let vm = this;

  vm.registerUser = registerUser;

  function registerUser (user) {
    UserService.register(user).then( (res)=> {
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
RegisterController.$inject = ['UserService', '$cookies', '$state'];
export { RegisterController };
