function GuitarService($http, $cookies) {

  let url = 'https://api.backand.com/1/objects/guitars';
  // const url = SERVER.URL + 'guitars/';

  this.add = add;
  this.getMyGuitar = getMyGuitar;

  function getMyGuitar () {
    let user = $cookies.getObject('user');

    let myURL = 'https://api.backand.com/1/objects/users' + user.id + '/guitars';

    return $http.get(myURL);
  }

  function add(guitar) {
    let user = $cookies.getObject('user');

    guitar.user = user.id;

    return $http.post(url, guitar);
  }

}

GuitarService.$inject = ['$http', '$cookies'];

// GuitarService.$inject = ['SERVER', '$http', '$cookies'];
export { GuitarService };
