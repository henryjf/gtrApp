import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import './vendors/backand.min';

import { config } from './config';
import { run } from './run';

import { NavController } from './controllers/nav.controller';

angular
  .module('app.core', ['ui.router', 'ngCookies', 'backand'])
  .config(config)
  .run(run)
  .controller('NavController', NavController)
  ;
