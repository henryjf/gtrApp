function AddGuitarController(GuitarService, $state) {

  let vm = this;

  vm.addGuitar = addGuitar;

  function addGuitar (guitar) {
    GuitarService.add(guitar).then( (res) => {

      $state.go('root.list')

    });
  }

}

AddGuitarController.$inject = ['GuitarService', '$state'];
export { AddGuitarController};
