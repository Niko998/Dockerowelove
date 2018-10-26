<?php

App::bind('config', require 'config.php');

App::bind('database', new Querybuilder(
    Connection::make(App::get('config')['database'])
));

