<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Todo;
use Auth;

class APIController extends Controller
{
    public function apiget()
    {
        return response()->json(Auth::user()->Todo);
    }

    public function addedJson(Request $request) 
    {
        $parDate = Todo::dateValidation($request->input("parent_id"));
        $request->validate([
            'task' => "required|filled",
            'final_date' => "date|after:today|before:$parDate",
            ]);
        
        Todo::addToDB($request->input("task"),$request->input("final_date"),$request->input("parent_id")); 
        $id = DB::table('todos')
        ->select('id')
        ->orderBy('id','desc')
        ->take(1)
        ->get();
        return response()->json(['id'=>$id]);
        }
    
    public function deletedJson(Request $request)
    {
        Todo::deleteTask($request->input("id")); 
        return response()->json([]);
    }

    public function deletedSubJson(Request $request)
    {
        Todo::deleteSubTask($request->input("id"));
        return response()->json([]);
    }

    public function doneTask(Request $request)
    {
        Todo::doneTask($request->input("id"));
        return response()->json([]);
    }

    public function subTasksList(Request $request)
    {
        $subtasks = Todo::readSubTasks($request->input("id"));
        $maintask = Todo::readMainTask($request->input("id"));
        return response()->json(['subtasks' => $subtasks, 'maintask' => $maintask]);
    }
}
