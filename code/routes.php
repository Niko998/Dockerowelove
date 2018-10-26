<?php

$router->get('','pagescontroler@home');
$router->post('tasks','pagescontroler@tasks');
$router->get('tasks','pagescontroler@show');