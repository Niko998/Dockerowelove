<?php

$app['database']->insert('todos',['description'=>$_POST['task'],'finish'=>$_POST['final_date']]);
$y= $app['database']->selectAll('todos');


require 'views/tasks.view.php';