function HomeController(GuitarService) {

  let vm = this;

  init();

  function init() {
    GuitarService.getMyGuitars().then( (res) => {
      vm.myGuitars = res.data.data;
      console.log(res);
    })
  }
}

HomeController.$inject = ['GuitarService'];
export { HomeController };
