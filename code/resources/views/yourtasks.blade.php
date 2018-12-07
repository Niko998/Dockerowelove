@extends('layouts.app')

@section('title')
Your tasks
@endsection

@section('content')
<p style="font: 24px Arial;">Twoje taski to: </p><br>

<ol style="font: 20px Arial;">

    @foreach ($tasks as $key)
        <li> 
            
            <a href="/yoursubtasks/{{ $key->id }}">
            Zrobic: {{ $key->description }}, do dnia: {{ $key->final_date }}
            <br>
        </li>
    @endforeach
        
    
</ol>
@endsection