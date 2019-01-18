@extends('layouts.app')

@section('title')
Your tasks
@endsection

@section('content')

        <div class="container">
            <p style="font: 24px Arial;">Twoje taski to: </p><br>

            <ol style="font: 20px Arial;">

                @foreach ($tasks as $key)
                    <li> 

                        <a href="/yoursubtasks/{{ $key->id }}" class="tasks">
                        Zrobic: {{ $key->description }}, do dnia: {{ $key->final_date }}
                        </a>
                        <br>
                    </li>
                @endforeach


                

            </ol>
            <hr>
            <hr>
            <hr>
            <figure class="image is-3by1">
                <img class="is-rounded" src="{{ asset('img/quote1.jpg') }}">
            </figure>
        </div>
    
@endsection