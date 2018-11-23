<?php

$name = $_POST["task"];
$fdate = $_POST["final_date"];
$userIDs = $userid;
//$userIDs = Auth::user()->id;
DB::insert('insert into todos (description, final_date, user_id) values (?, ?, ?)', [$name, $fdate, $userIDs]);
?>
Task zostal dodany prawidlowo! <br>
<a href='/home'> Powrot do strony glownej</a>