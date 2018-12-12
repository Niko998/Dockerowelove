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
        
        $request->validate([
            'task' => 'required',
            'final_date' => 'date',
            ]);
        //Dlaczego nie dziala null=>domyslna wartosc =0
        if (!Todo::dateValidation($request->input("final_date"), $request->input("parent_id"))) return view('notadded');
        Todo::addToDB($request->input("task"),$request->input("final_date"),$request->input("parent_id")); 
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
