import angular from 'angular';

import './app.core/index';
import './app.user/index';
import './app.guitar/index';

angular
  .module('app', ['app.core', 'app.user', 'app.guitar']);
