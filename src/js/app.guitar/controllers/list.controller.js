function ListController (GuitarService, $cookies) {

  let vm = this;

  init();

  function init() {

      let userId = $cookies.get('userId');

      GuitarService.getMyGuitars(userId).then( (res) => {
      vm.allGuitars = res.data.data;

      console.log(res);
    });
  }

}

ListController.$inject = ['GuitarService', '$cookies'];
export { ListController };
