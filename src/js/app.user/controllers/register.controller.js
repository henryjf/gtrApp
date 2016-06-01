function RegisterController (UserService) {

  let vm = this;

  vm.registerUser = registerUser;

  function registerUser (user) {
    UserService.register(user).then( (res)=> {
      console.log(res);
    })

  }

}

RegisterController.$inject = ['UserService'];
export { RegisterController };
