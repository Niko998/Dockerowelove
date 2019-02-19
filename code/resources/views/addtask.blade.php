
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
            <form action="/yourtasks" method="post">
                @csrf
                Chce: <input name="task" type="text" placeholder="Wpisz cel" class="input is-large is-rounded"/><br>
                
                Kiedy: <input name="final_date" type="date" value="Wpisz date" class="input is-large is-rounded"/> <br>
                <input name="parent_id" type="hidden" value="<?php echo 0 ?>">
                <input type="submit" value="Dodaj cel" class="btn btn-success mt-5"/>             
            </form>
        </div>

        <figure class="image is-3by1">
                <img class="is-rounded" src="{{ asset('img/quote3.jpg') }}">
        </figure>
                
    </div>
</div>

    
@endsection