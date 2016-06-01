import angular from 'angular';

import { RegisterController } from './controllers/register.controller';

angular
  .module('app.user', [])
  .controller('RegisterController', RegisterController)
;
