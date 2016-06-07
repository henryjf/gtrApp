import angular from 'angular';

import { AddGuitarController } from './controllers/addguitar.controller';
import { ListController } from './controllers/list.controller';
import { DetailController } from './controllers/detail.controller';
import { GuitarService } from './services/guitar.service';

angular
  .module('app.guitar', [])
  .controller('AddGuitarController', AddGuitarController)
  .controller('ListController', ListController)
  .controller('DetailController', DetailController)
  .service('GuitarService', GuitarService);
