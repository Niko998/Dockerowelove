@extends('layouts.app')

@section('title')
Your tasks
@endsection

@section('content')
Twoje taski to: <br>
<ol>
<?php
    //ten if nie dziala :(
    if ($tasks==NULL){ echo "You don't have any tasks!"; }
    foreach ($tasks as $key){ echo "<li>";
            echo "<a href=/yoursubtasks/{$key->id}>";
            echo "Zrobic: ".$key->description.", do dnia: ".$key->final_date;
            echo "<br>";
            echo "</button>";

            echo "</li>";
        }
        
    ?>
</ol>
@endsection