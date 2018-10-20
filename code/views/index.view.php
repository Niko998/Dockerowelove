
<!DOCTYPE HTML>
<html lang = "en">
<head>
	<meta charset="utf-8"/>
	<title> Hello World!</title>
	<meta name="description" content="Hello World!" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="views/style.css" type="text/css"/>
</head>
<body>
    <?php
    echo '<div id="container" class="container pt-5">
    <div class="rectangle">
        <div class="square">';
            echo '<span class="date badge badge-warning">' . date("d-m-Y") . '</span>';
        echo '</div>
        <div class="square second-square">
            <form action="tasks" method="post">
                Chce: <input name="task" type="text" value="Wpisz cel"/><br>
                Kiedy: <input name="final_date" type="date" value="Wpisz date"/> <br>
                <input type="submit" value="Dodaj cel" class="btn btn-success mt-5"/>             
            </form>
        </div>
    </div>
</div>';
    ?>
</body>
</html>
