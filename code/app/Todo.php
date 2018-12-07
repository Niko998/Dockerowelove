<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Todo extends Model
{
    protected $table = 'todos';

    public static function addToDB($description, $final_date, $parent_id = 0){
        $task = new Todo;
        $task->description = $description;
        $task->final_date = $final_date;
        $task->user_id = User::userID();
        $task->parent_id = $parent_id;
        $task->save();
        
    
        
    }

    public static function readTasks(){
       return Todo::where([['user_id', User::userID()],['parent_id',0]])->get();
    }
   


    public static function readSubTasks($id)
    {
        return Todo::where('parent_id',$id)->get();
    }

    public static function readMainTask($id)
    {
        return Todo::where('id',$id)->get();   
    }

    public static function dateValidation($date,$parent)
    {
        $today = date("Y-m-d");
        if ($parent == 0) {
            if ($today > $date) return false;
            else return true;
        }
        else {
            $parentTask = Todo::where('id',$parent)->get();
            if ($today <= $date and $date <= $parentTask[0]->final_date){
                return true;
            }
            else return false;
        }
    }
}
