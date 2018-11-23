<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
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
        $name = $_POST["task"];
        $fdate = $_POST["final_date"];
        $userIDs = Auth::user()->id;
        DB::insert('insert into todos (description, final_date, user_id) values (?, ?, ?)', [$name, $fdate, $userIDs]);
              
        return view('added', ['userid' => $userIDs]);
    }

    public function yourtasks()
    {
        $userIDs = Auth::user()->id;
        $users = DB::select("select * from todos where user_id = ".$userIDs."");
        return view('yourtasks', ['users' => $users]);
    }
}
