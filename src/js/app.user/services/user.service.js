function UserService (Backand, $rootScope, $cookies, $state) {

  this.register  = register;
  this.login     = login;
  this.checkAuth = checkAuth;
  this.logout    = logout;
  this.authChanged = authChanged;

  function checkAuth () {
    let token =$cookies.get('user');
    return user ? true : false;
  }

  function authChanged (stat) {
    $rootScope.$broadcast('authChanged', stat);
  }

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
    return Backand.signin(
      user.username,
      user.password
    );
  }

  function logout() {
    $cookies.remove('user');
    Backand.signout();
    $state.go('root.login');
  }

  function checkAuth(currentState){
    let user = $cookies.getObject('user');
    if (user) {
      // console.log('user is logged in');
      this.authChanged('authenticated');
    } else if (currentState === 'root.login' || currentState ==='root.register' || currentState ==='root.home') {
      // console.log('already on a login/register page');
      this.authChanged('un-authenticated');
    } else {
      this.authChanged('un-authenticated');
      $state.go('root.login');
    }
  }


}

UserService.$inject = ['Backand', '$rootScope', '$cookies', '$state'];
export { UserService };
