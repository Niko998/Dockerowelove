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

    public function added(Request $request)
    {
        if ($request->input("parent_id") == null){ $parent = 0; }
        else {$parent = $request->input("parent_id");}
        //Todo::addToDB($request->input("task"),$request->input("final_date"),$request->input("parent_id"));       
        Todo::addToDB($request->input("task"),$request->input("final_date"),$parent); 
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
