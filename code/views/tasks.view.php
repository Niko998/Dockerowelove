<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tasks</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="/views/style.css" />
    
</head>
<body>
    <h1>Dziala</h1>
    <?php
       
       #var_dump($app['database']);
       
       foreach($y as $row){ 
       foreach($row as $key => $case) {
        echo $key." hejo ".$case . "<br>";
           }    }
        #print_r($y);

    ?>
</body>
</html>