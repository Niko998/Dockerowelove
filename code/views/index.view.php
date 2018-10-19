
<!DOCTYPE HTML>
<html lang = "en">
<head>
	<meta charset="utf-8"/>
	<title> Hello World!</title>
	<meta name="description" content="Hello World!" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<link rel="stylesheet" href="views/style.css" type="text/css"/>
</head>
<body>
    <?php
    echo '<div id="container">
    <div class="rectangle">
        <div class="square">';
            echo date("d-m-Y");
        echo '</div>
        <div class="square">
            <form action="tasks" method="post">
                Chce: <input name="task" type="text" value="Wpisz cel"/><br>
                Kiedy: <input name="final_date" type="date" value="Wpisz date"/> <br>
                <input type="submit" value="Dodaj cel"/>
                
            </form>
        </div>
    </div>
</div>';
    ?>
</body>
</html>
