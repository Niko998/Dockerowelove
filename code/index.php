<?php

$query = require 'core/bootstrap.php';



require Router::load('routes.php')

    ->direct(Request::uri(),Request::method());


#wypisac to ladniej w html w listach
#dodawanie do bazy danych