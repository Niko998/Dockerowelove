<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\users;
use App\todos;
use Auth;

class PagesController extends Controller
{
    public function home()
    {
        

        return view('home');
    }

    public function whatisit()
    {
        return view('whatisit');
    }

    public function addtask()
    {
        
        return view('addtask');
    }

    public function added()
    {
        todos::addToDB($_POST["task"],$_POST["final_date"]);       
        return view('added');
    }

    public function yourtasks()
    {
       $tasks =  todos::readTasks();
       return view('yourtasks', ['tasks' => $tasks]);
    }
}
