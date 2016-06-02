import angular from 'angular';

import { RegisterController } from './controllers/register.controller';
import { LoginController } from './controllers/login.controller';
import { UserService } from './services/user.service';

angular
  .module('app.user', [])
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .service   ('UserService', UserService);
;
