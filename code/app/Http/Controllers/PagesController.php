<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;


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
}
