<?php

class Connection
{

    public static function make($config)
    {
        try{

            #return $pdo = new PDO('mysql:host=mysql;dbname=users_tasks', 'nikodem', 'jezyk12');

            return new PDO(

                $config['connection'].';dbname='.$config['name'],
                $config['username'],
                $config['password'],
                $config['options']
            );
        
        } catch(PDOException $e){
            die('Could not connect :(');
        }
    }


}
