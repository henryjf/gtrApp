function ListController ($http, SERVER) {

  let vm = this

  init();

  function init() {
    $http.get(SERVER.then ( (res) => {
      vm.allGuitars = res.data;
    });
  }



}

ListController.$inject = ['$http', 'SERVER'];
export { ListController };
