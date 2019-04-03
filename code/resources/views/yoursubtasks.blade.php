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
    <div id="alertok" class="is-invisible">
            <h4 id="progressMessage"></h4>
       </div>
    <br>
    Twoje Podtaski to:
    <ol>


        @foreach ($subtasks as $key)
            <li>
                <div class="columns">
                    <div class="column is-4">
                    Zrobic: {{ $key->description }}, do dnia: {{ $key->final_date }}
                    </div>
                    <div class="column">
                    <button type="button" class="subDoneTasksButtons" id= {{ $key->id}}>Done!</button>
                    <button type="button" class="subDelTasksButtons" id= {{ $key->id}}>X</button>
                    </div>
                </div>
            </li>
            @endforeach
            <br>
            <br>
            <!-- dodac nowego diva, do ktorego beda wpisywane nowe taski, po przeladowaniu strony one sie wyswietla z bazy danych, a div bedzie pusty --> 
    Dodaj nowy podtask
            <form action="/yourtasks" method="post">
                    @csrf
                    Chce: <input id="inputTask" name="task" type="text" placeholder="Wpisz cel" class="input is-rounded"/><br>
                    Kiedy: <input id="inputDate" name="final_date" type="date" class="input is-rounded"/> <br>
                    <input id="inputParent" name="parent_id" type="hidden" value="<?php echo $maintask[0]->id ?>">
                    <input type="submit" value="Dodaj subtask" class="btn btn-success mt-5 button is-link" id="subInputSubmit"/>             
                </form>
    </ol>
    <div id="subForm">
        <form action="/deleted" method="post">
            @csrf
            <input id="mainTaskID"name="id" type="hidden" value="<?php echo $maintask[0]->id ?>">
            <input type="submit" class="button is-danger"id="APIdeleteSubmit" value="Usun task">
        </form>
    </div>
</div>
@endsection

@section('scripts')
<script src="{{ asset('js/task.js') }}" ></script>
@endsection