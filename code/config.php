<?php
 
return [
    'database' => [
        'name' => 'users_tasks',
        'username' => getenv("MYSQL_USER"),
        'password' => getenv("MYSQL_PASSWORD"),
        'connection' => 'mysql:host=mysql',
        'options' => [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
        ]

    ]
    ];