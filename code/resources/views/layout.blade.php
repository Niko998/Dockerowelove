<!DOCTYPE <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" />
</head>
<body>
    <ul><li><a href="/whatisit">What is it?</a></li></ul>
    <ul><li><a href="/">Home page</a></li></ul>
    @yield('content')
</body>
</html>