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
        $tasks = Todo::readTasks();
        return response()->json($tasks);
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
}
