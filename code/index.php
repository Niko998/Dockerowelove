<?php

$query = require 'core/bootstrap.php';



require Router::load('routes.php')

    ->direct(Request::uri(),Request::method());


#dodac /task, dzialajace
#usuwanie zadan zrobionych