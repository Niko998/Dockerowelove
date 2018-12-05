@extends('layouts.app')

@section('title')
Your tasks
@endsection

@section('content')
<?php echo $maintask[0]->description;?> 
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
        <form action="/added" method="post">
                @csrf
                Chce: <input name="task" type="text" value="Wpisz cel"/><br>
                Kiedy: <input name="final_date" type="date" value="Wpisz date"/> <br>
                <input name="parent_id" type="hidden" value="<?php echo $maintask[0]->id ?>">
                <input type="submit" value="Dodaj subtask" class="btn btn-success mt-5"/>             
            </form>
</ol>
@endsection