<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> MySuperTasker </title>

    <!-- Scripts -->
   

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">




        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">    
                <!-- Left Side Of Navbar -->
                <div class="navbar-brand">
                        <a  href="{{ url('/') }}" id="navTitle"> 
                            Muy super tasker! 
                        </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start"></div>
                    <!-- Right Side Of Navbar -->
                    <div class="navbar-end">
                            <!-- Authentication Links -->
                            @guest
                                <p class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </p>
                                <p class="nav-item">
                                    @if (Route::has('register'))
                                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                    @endif
                                </p>
                            @else
                                    <li class="navbar-item has-dropdown " id="nav_menu">
                                        <a id="navbarDropdown" class="navbar-link" role="button" data-toggle="dropdown" v-pre>
                                            {{ Auth::user()->name }} <span class="caret"></span>
                                        </a>
                                        <div class="navbar-dropdown" id="nav_drop_menu">
                                            <!--<a class="navbar-item" href="/addtask">Add task</a> -->
                                            <a class="navbar-item" href="/tasks">Your Tasks</a>
                                            <a class="navbar-item" href="/whatisit">What is it?</a>
                                            <hr class="navbar-divider">
                                            <a class="navbar-item" href="{{ route('logout') }}"
                                               onclick="event.preventDefault();
                                                             document.getElementById('logout-form').submit();">
                                                {{ __('Logout') }}
                                            </a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                @csrf
                                            </form>
                                        </div> 
                                    </li>
                            @endguest
                    </div>  
                </div>
            </div>              
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <strong>MySuperTasker</strong> by <a href="https://github.com/Niko998" color="black">Nikodem Kabsch</a>.
                </p>
            </div>
        </footer>
    
    </div>
    <script src="{{ asset('js/app.js') }}" ></script>
    @yield('scripts')
</body>

</html>
