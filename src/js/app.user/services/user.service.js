function UserService (Backand) {

  this.register = register;
  this.login = login;
  // this.authenticate = anuthenticate;
  // this.logOut = logOut;


  // function logOut() {
  //   Backand.signout();
  //   $cookies.remove('name');
  //   $cookies.remove('token');
  //   $cookies.remove('useId');
  // }

  function register (user) {
    return Backand.signup(
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.confirmPassword
    );
  }

  function login(user) {
    
  }


}

UserService.$inject = ['Backand'];
export { UserService };
