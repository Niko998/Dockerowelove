@extends('layouts.app')

@section('title')
Your tasks
@endsection

@section('content')
<div class="container">
    <div>
        <p style="font: 32px Arial;">
        <?php echo $maintask[0]->description." do ".$maintask[0]->final_date; ?>
        </p> 
    </div>
    
    <br>
    Twoje Podtaski to:
    <ol>


        @foreach ($subtasks as $key)
            <li>
                Zrobic: {{ $key->description }}, do dnia: {{ $key->final_date }}
                <br>
            </li>
            @endforeach
            <br>
            <br>
    Dodaj nowy podtask
            <form action="/yourtasks" method="post">
                    @csrf
                    Chce: <input name="task" type="text" placeholder="Wpisz cel" class="input is-rounded"/><br>
                    Kiedy: <input name="final_date" type="date" value="Wpisz date" class="input is-rounded"/> <br>
                    <input name="parent_id" type="hidden" value="<?php echo $maintask[0]->id ?>">
                    <input type="submit" value="Dodaj subtask" class="btn btn-success mt-5"/>             
                </form>
    </ol>

    <hr>
    <hr>
    <form action="/yourtasks" method="post">
        @csrf
        <input name="id" type="hidden" value="<?php echo $maintask[0]->id ?>">
        <input type="submit" value="Usun task">
    </form>
</div>
@endsection