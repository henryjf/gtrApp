function HomeController(GuitarService) {

  let vm = this;

  init();

  function init() {

    GuitarService.getAllGuitars().then( (res) => {
      vm.allGuitars = res.data.data;
    });

  }
}

HomeController.$inject = ['GuitarService'];
export { HomeController };
