function ListController (GuitarService, $cookies, $state) {

  let vm = this;


  init();

  function init() {

      let userId = $cookies.get('userId');

      GuitarService.getMyGuitars(userId).then( (res) => {
        vm.allGuitars = res.data.data;

        vm.own = vm.allGuitars.filter(function(guitar){
          return guitar.status === 'I Own';
        });

        vm.wishList =vm.allGuitars.filter(function(guitar) {
          return guitar.status === 'Wish List';
        })

        // console.log(vm.own);
        // console.log(vm.wishList);

      });
  }


}

ListController.$inject = ['GuitarService', '$cookies', '$state'];
export { ListController };
