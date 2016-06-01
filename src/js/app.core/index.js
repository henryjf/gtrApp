import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import './vendors/backand.min';

import { config } from './config';

angular
  .module('app.core', ['ui.router', 'ngCookies', 'backand'])
  .config(config)
  ;
