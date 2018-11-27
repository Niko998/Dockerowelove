<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\users;

class todos extends Model
{
    public static function addToDB($description, $final_date){
        $task = new todos;
        $task->description = $description;
        $task->final_date = $final_date;
        $task->user_id = users::userID();
        $task->save();
        
    
        
    }

    public static function readTasks(){
       return todos::where('user_id', users::userID())->get();
    }
   
}
