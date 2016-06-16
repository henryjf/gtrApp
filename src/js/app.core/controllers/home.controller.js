function HomeController(GuitarService, $cookies) {

  let vm = this;

  init();

  function init() {

    let user = $cookies.getObject('user');

    GuitarService.getAllGuitars().then( (res) => {

      // 1. Check if you are logged in
      if (user) {
        // 2. Get your user ID - ($cookies.get())
        let userId = user.id;
        // 3. Take your data (res.data.data) and filter
        // out any that match user with the user id
        // 4. Set `vm.allGuitars` to the result of the filter
        vm.allGuitars = res.data.data.filter( function (guitar) {
          // test that guitar's user does NOT match our logged in ID
          return guitar.user !== userId;
        });

      } else {
        vm.allGuitars = res.data.data;
      }


    });

  }
}

HomeController.$inject = ['GuitarService','$cookies'];
export { HomeController };
