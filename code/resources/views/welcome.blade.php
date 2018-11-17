@extends('layout')

@section('title')
MyStone
@endsection

@section('content')
  <?php
    echo '<div id="container" class="container pt-5">
    <div class="rectangle">
        <div class="square">';
            echo '<span class="date badge badge-warning">' . date("d-m-Y") . '</span>';
        echo '</div>
        <div class="square second-square">
            <form action="/" method="post">
                Chce: <input name="task" type="text" value="Wpisz cel"/><br>
                Kiedy: <input name="final_date" type="date" value="Wpisz date"/> <br>
                <input type="submit" value="Dodaj cel" class="btn btn-success mt-5"/>             
            </form>
        </div>
    </div>
</div>';

    ?>
@endsection