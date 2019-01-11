@extends('layouts.app')

@section('content')


<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    @guest
                        Log in or register!
                    @else
                        Add new task!
                    @endguest
                    <figure class="image is-3by1">
                        <img src="{{ asset('img/quote2.jpg') }}">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
