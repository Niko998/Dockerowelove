@extends('layouts.app')

@section('title')
Your tasks
@endsection

@section('content')
Twoje taski to: <br>
<ol>
<?php
    
    foreach ($users as $key){ echo "<li>";
            echo "Zrobic: ".$key->description.", do dnia: ".$key->final_date;
            echo "<br>";
            echo "</li>";
        }
        
    ?>
</ol>
@endsection