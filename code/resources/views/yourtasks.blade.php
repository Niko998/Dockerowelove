@extends('layouts.app')

@section('title')
Your tasks
@endsection

@section('content')
Twoje taski to: <br>
<ol>

    @foreach ($tasks as $key)
        <li>
            <a href="/yoursubtasks/{{ $key->id }}">
            Zrobic: {{ $key->description }}, do dnia: {{ $key->final_date }}
            <br>

        </li>
    @endforeach
        
    
</ol>
@endsection