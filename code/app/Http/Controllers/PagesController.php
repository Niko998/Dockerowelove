<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class PagesController extends Controller
{
    public function home()
    {
        $users = DB::select('select * from todos');

        return view('welcome', ['users' => $users]);
    }

    public function whatisit()
    {
        return view('whatisit');
    }
}
