@extends('layouts.app')

@section('content')


<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
               
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    @guest
                    <p >
                                    <a href="{{ route('login') }}">{{ __('Log in') }}</a> or
                                    @if (Route::has('register'))
                                        <a href="{{ route('register') }}">{{ __('Register') }}</a>!
                                    @endif
                    </p>
                    @else
                    Plan your future! Add new task! Reach your goals!
                    @endguest
                    <figure class="image is-3by1">
                        <img  src="{{ asset('img/quote2.jpg') }}">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
