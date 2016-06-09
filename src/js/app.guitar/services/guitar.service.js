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
    return $http.get(url);
    // console.log($http.get(url));
  };


  function add(guitar) {
    let user = $cookies.getObject('user');
    guitar.user = user.id;

    return $http.post(url, guitar);

    let wishList = [];

  guitars.forEach( function(guitar) {
    if (guitar === wishList)
    return wishList;
    console.log(wishList);
  });
};

}

GuitarService.$inject = ['$http', '$cookies','SERVER'];
export { GuitarService };
