function DetailController($http, SERVER, $stateParams, $state) {

  let vm = this;

  vm.deleteGuitar = deleteGuitar;

  init();

  function init() {
    console.log($stateParams);
    $http.get(SERVER.URL + 'guitars/' + $stateParams.guitarId).then ( (res) => {
      console.log(res);
      vm.detailGuitar = res.data;
    });
  }

  function deleteGuitar (guitarId) {
    $http.delete(SERVER.URL  + 'guitars/'+ guitarId).then(
      (res) => {
        $state.go('root.list')
      });
  }

}

DetailController.$inject = ['$http', 'SERVER', '$stateParams', '$state'];
export { DetailController };
