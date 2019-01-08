
@extends('layouts.app')

@section('title')
Addtask
@endsection

@section('content')

    <div id="container" class="container pt-5">
    <div class="rectangle">
        <div class="square">
            <span class="date badge badge-warning"> <?php echo date('d-m-Y'); ?> </span>
       </div>
        <div class="square second-square">
            <form action="/added" method="post">
                @csrf
                Chce: <input name="task" type="text" placeholder="Wpisz cel"/><br>
                <?php //$errors = $validator->errors();
                //echo $errors->first('task');?>
                Kiedy: <input name="final_date" type="date" value="Wpisz date"/> <br>
                <input name="parent_id" type="hidden" value="<?php echo 0 ?>">
                <input type="submit" value="Dodaj cel" class="btn btn-success mt-5"/>             
            </form>
        </div>
                
    </div>
</div>

    
@endsection