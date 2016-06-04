import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import './vendors/backand.min';

import { serverConstant } from './constants/server.constant';

import { config } from './config';
import { run } from './run';

import { NavController } from './controllers/nav.controller';
import { HomeController } from './controllers/home.controller';

angular
  .module('app.core', ['ui.router', 'ngCookies', 'backand'])
  .config(config)
  .constant('SERVER', serverConstant)
  .run(run)
  .controller('NavController', NavController)
  .controller('HomeController', HomeController)
  ;
