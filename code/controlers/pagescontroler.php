<?php

class pagescontroler{

    public function home()
    {
        
        $tasks = App::get('database')->selectAll('todos');
        require 'views/index.view.php';

    }

    public function tasks()
    {
        App::get('database')->insert('todos',['description'=>$_POST['task'],'finish'=>$_POST['final_date']]);
        $y= App::get('database')->selectAll('todos');


        require 'views/tasks.view.php';
    }
    public function show()
    {
        $y= App::get('database')->selectAll('todos');


        require 'views/tasks.view.php';
    }
}