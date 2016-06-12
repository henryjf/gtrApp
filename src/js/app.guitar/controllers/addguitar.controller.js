function AddGuitarController(GuitarService, $state) {

  let vm = this;
  vm.status = status;
  vm.addGuitar = addGuitar;

  function addGuitar (guitar) {

    console.log(guitar);
    GuitarService.add(guitar).then( (res) => {

      $state.go('root.list')
    });
  }

}

AddGuitarController.$inject = ['GuitarService', '$state'];
export { AddGuitarController};
