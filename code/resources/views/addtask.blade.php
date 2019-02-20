
@extends('layouts.app')

@section('title')
Addtask
@endsection

@section('content')

    <div id="container" class="container pt-5">
    <div class="rectangle">
        <div class="square">
            <span class="date badge badge-warning"> <?php echo date('d-m-Y'); ?> </span>
       </div>
        <div class="square second-square">
            
            <form action="/yourtasks"  method="post" id="inputForm">
                @csrf 
                Chce: <input name="task" id="inputTask" type="text" placeholder="Wpisz cel" class="input is-large is-rounded"/><br>
                Kiedy: <input name="final_date" id="inputDate" type="date" class="input is-large is-rounded"/><br>
                <input name="parent_id" id="inputParent" type="hidden" value="<?php echo 0 ?>">
                <button type="submit" class="button" id="inputSubmit">Add Task</button>
            </form>
        </div>

        <figure class="image is-3by1">
                <img class="is-rounded" src="{{ asset('img/quote3.jpg') }}">
        </figure>
                
    </div>
</div>

    
@endsection