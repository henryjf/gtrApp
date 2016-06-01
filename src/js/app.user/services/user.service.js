function UserService () {

  this.register = register;
  this.login = login;
  this.authenticate = anuthenticate;
  this.logOut = logOut;


  function logOut() {
    Backand.signout();
    $cookies.remove('name');
    $cookies.remove('token');
    $cookies.remove('useId');
  }



}

UserService.$inject = [];
export { UserService };
