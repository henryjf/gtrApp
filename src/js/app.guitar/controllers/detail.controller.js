function DetailController($http, SERVER, $stateParams, $state, GuitarService, $cookies) {

  let vm = this;
  vm.deleteGuitar = deleteGuitar;



  init();

  function init() {
    // console.log($stateParams);
    $http.get(SERVER.URL + 'guitars/' + $stateParams.guitarId).then ( (res) => {
      // console.log(res);
      vm.detailGuitar = res.data;

      // goal: compare user id for logged in user to the user id for this guitar
      // console.log($cookies);

      let loggedInUserId = $cookies.getObject('user').id;
      // console.log('logged in user:', loggedInUserId);

      let thisGuitarId   = vm.detailGuitar.user;
      // console.log('guitar user id:', thisGuitarId);

      // console.log('test if this is true:', loggedInUserId === thisGuitarId );
      vm.showDeleteBtn = (loggedInUserId === thisGuitarId);
    });
  }

  function deleteGuitar (guitarId) {
    // if user is logged in, show delete button, otherwise do not
    $http.delete(SERVER.URL  + 'guitars/' + guitarId).then( (res) => {
        $state.go('root.list')
      });
  }

}

DetailController.$inject = ['$http', 'SERVER', '$stateParams', '$state', 'GuitarService', '$cookies'];
export { DetailController };
