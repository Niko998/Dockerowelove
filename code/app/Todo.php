<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\User;

class Todo extends Model
{
    protected $table = 'todos';

    public static function addToDB($description, $final_date, $parent_id = 0){
        $task = new Todo;
        $task->description = $description;
        $task->final_date = $final_date;
        $task->user_id = \Auth::user()->id;
        $task->parent_id = $parent_id;
        $task->done = false;
        $task->save();
    }
   
    public static function doneTask($id)
    {
        DB::table('todos')->where('id',$id)->update(['done'=>true]);
    }

    public static function readSubTasks($id)
    {
        return Todo::where('parent_id',$id)->get();
    }

    public static function readMainTask($id)
    {
        return Todo::where('id',$id)->get();   
    }

    public static function dateValidation($parent)
    {
        if ($parent == 0) {
            return "2198-05-16";
        }
        else {
            $parentTask = Todo::where('id',$parent)->get();
            return $parentTask[0]->final_date;
        }    
    }

    public static function deleteTask($id)
    {
        DB::table('todos')->where('id',$id)->delete();
        DB::table('todos')->where('parent_id',$id)->delete();
    }

    public static function deleteSubTask($id)
    {
        
        DB::table('todos')->where('id',$id)->delete();
    }

    public function User(){
        return $this->belongsTo(User::class);
    }

    public function subTodo()
    {
        return $this->hasMany(Todo::class, 'parent_id');
    }

}
