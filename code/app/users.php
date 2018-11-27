<?php


namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;

class users extends Model
{
    public static function userID(){
        return Auth::user()->id;
    }
}
