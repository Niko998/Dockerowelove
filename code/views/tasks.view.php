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
              $i=0;
              $wypis = ["Zadanie nr.", "Zadanie: ", "Do dnia: "];
       foreach($y as $row){ echo "<li>";
            foreach($row as $key => $case) {
                echo  $wypis[$i%3].$case.", ";
                $i=$i+1;
           }    echo "</li><br>";
        }
        

    ?>
    </ul>
</body>
</html>