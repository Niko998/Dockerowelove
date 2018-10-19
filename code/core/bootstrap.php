<?php

$app = [];

$app['config'] = require 'config.php';
require 'core/request.php';
require 'core/database/connection.php';
require 'core/database/querybuilder.php';
require 'core/router.php';

$app['database'] = new Querybuilder(
    Connection::make($app['config']['database'])
);

