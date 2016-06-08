function HomeController(GuitarService, $cookies) {

  let vm = this;

  init();

  function init() {
    GuitarService.getMyGuitars().then( (res) => {
      vm.myGuitar = res.data.data;

      let userId = $cookies.get('userId');


      GuitarService.getAllGuitars().then( (res) => {
      vm.allGuitars = res.data.data;
      console.log(res);
    });

    });
  }
}

HomeController.$inject = ['GuitarService', '$cookies'];
export { HomeController };
