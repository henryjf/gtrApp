import angular from 'angular';

import { AddGuitarController } from './controllers/addguitar.controller';
import { GuitarService } from './services/guitar.service';

angular
  .module('app.guitars', [])
  .controller('AddGuitarController', AddGuitarController)
  .service('GuitarService', GuitarService);
  
