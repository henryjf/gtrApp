function HomeController(GuitarService) {

  let vm = this;

  init();

  function init() {
    GuitarService.getMyGuitars().then( (res) => {
      vm.myGuitar = res.data.data;
      // console.log(res);
    })
  }
}

HomeController.$inject = ['GuitarService'];
export { HomeController };
