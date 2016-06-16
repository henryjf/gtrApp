function GuitarService($http, $cookies, SERVER) {

  const url = SERVER.URL + 'guitars';

  this.add           = add;
  this.getMyGuitars  = getMyGuitars;
  this.getAllGuitars = getAllGuitars;

  function getMyGuitars () {
    let user = $cookies.getObject('user');
    let myURL = SERVER.URL + 'users/' + user.id + '/guitars';

    return $http.get(myURL);
  };

  function getAllGuitars () {
    return $http.get(url + '?pageSize=50', { headers: SERVER.HEADERS });
  };

  function add(guitar) {
    let user = $cookies.getObject('user');
    guitar.user = user.id;

    return $http.post(url, guitar);

  };

}

GuitarService.$inject = ['$http', '$cookies','SERVER'];
export { GuitarService };
