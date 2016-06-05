function AddGuitarController(GuitarService) {

  let vm = this;

  vm.addGuitar = addGuitar;

  function addGuitar (guitar) {
    GuitarService.add(guitar);
  }
}

AddGuitarController.$inject = ['GuitarService'];
export { AddGuitarController};
