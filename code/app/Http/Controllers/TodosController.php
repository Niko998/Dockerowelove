<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
use Auth;

class TodosController extends Controller
{
    public function addtask()
    {
        
        return view('addtask');
    }

    public function added()
    {
        Todo::addToDB($_POST["task"],$_POST["final_date"],$_POST["parent_id"]);       
        return view('added');
    }

    public function yourtasks()
    {
       $tasks =  Todo::readTasks();
       return view('yourtasks', ['tasks' => $tasks]);
    }

    public function yoursubtasks($id)
    {
        $subtasks = Todo::readSubTasks($id);
        $maintask = Todo::readMainTask($id);
        return view('yoursubtasks',['subtasks' => $subtasks, 'maintask' => $maintask]);
    }
}
