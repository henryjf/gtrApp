function GuitarService($http, $cookies, SERVER) {

  // let url = 'https://api.backand.com/1/objects/guitars';
  const url = SERVER.URL + 'guitars';

  this.add = add;
  this.getMyGuitars = getMyGuitars;

  function getMyGuitars () {
    let user = $cookies.getObject('user');

    let myURL = SERVER.URL + 'users/' + user.id + '/guitars';

    // let myURL = 'https://api.backand.com/1/objects/users/' + user.id + '/guitars';

    return $http.get(myURL);
  }

  function add(guitar) {
    let user = $cookies.getObject('user');

    guitar.user = user.id;

    return $http.post(url, guitar);
  }

}

GuitarService.$inject = ['$http', '$cookies','SERVER'];
export { GuitarService };
