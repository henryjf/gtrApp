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
  };


  // function delete(guitar) {
  //   let user = $cookies.getObject('user');
  //   if(user.id === guitar.user)
  //   return true };
  //   else {
  //     return false
  //   };



}
  // function deleteGuitar (guitarId) {
  //   $http.delete(SERVER.URL  + 'guitars/' + guitarId).then( (res) => {
  //       $state.go('root.list')
  //     });
  // }

// }

GuitarService.$inject = ['$http', '$cookies','SERVER'];
export { GuitarService };
