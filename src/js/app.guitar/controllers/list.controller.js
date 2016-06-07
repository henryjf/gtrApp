function ListController (GuitarService, $cookies, $state) {

  let vm = this;

  init();

  function init() {

      let userId = $cookies.get('userId');

      GuitarService.getMyGuitars(userId).then( (res) => {
      vm.allGuitars = res.data.data;
      // $state.go('root.detail')

      // console.log(res.data.data);
    });
  }

}

ListController.$inject = ['GuitarService', '$cookies', '$state'];
export { ListController };
