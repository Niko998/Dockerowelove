<?php

$y= $app['database']->selectAll('todos');

require 'views/tasks.view.php';