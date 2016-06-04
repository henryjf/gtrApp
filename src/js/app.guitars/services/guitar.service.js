function GuitarService(SERVER, $http, $cookies) {

  const url = SERVER.URL + 'guitars/';

  this.add = add;
  this.getMyGuitars = getMyGuitars;

  function getMyGuitars () {
    let user = $cookies.getObject('user');


  }




}

GuitarService.$inject = ['SERVER', '$http', '$cookies'];
export { GuitarService };
