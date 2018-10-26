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
    <a href='/'>Main page</a>
    <h1>Dziala</h1>
    <ul>
    <?php

              $wypisTitles = ['id' => "Zadanie nr.", 'description' => "Zadanie: ", 'finish' => "Do dnia: "];
       foreach($y as $index => $row){ 
        echo "<li>";
            foreach($row as $key => $case) {
                echo  $wypisTitles[$key].$case.", ";
           }    echo "</li><br>";
        }
        

    ?>
    </ul>
</body>
</html>