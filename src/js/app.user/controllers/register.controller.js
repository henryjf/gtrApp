function RegisterController (UserService) {

  let vm = this;

  vm.registerUser = registerUser;

  function registerUser (user) {
    UserService.register(user).then( (res)=> {
      let user = {
        name: res.fullName,
        id: res.userId,
        email: res.userName
      };
      $cookies.putObject('user', user);
    });
  }

}
RegisterController.$inject = ['UserService'];
export { RegisterController };
