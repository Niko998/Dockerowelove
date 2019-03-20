@extends('layouts.app')

@section('title')
Addtask
@endsection



@section('content')
<div id="alertok" class="is-invisible">
            <h4 id="progressMessage"></h4>
       </div>
<div id="taskList"></div>

<form action="/yourtasks"  method="post" id="APIinputForm">
                @csrf 
                Chce: <input name="task" id="inputTask" type="text" placeholder="Wpisz cel" class="input is-large is-rounded"/><br>
                Kiedy: <input name="final_date" id="inputDate" type="date" class="input is-large is-rounded"/><br>
                <input name="parent_id" id="inputParent" type="hidden" value="<?php echo 0 ?>">
                <button type="submit" class="button" id="APIinputSubmit">Add Task</button>
            </form>

<div class="Pictures">
                <figure class="image is-3by1">
                    <img class="is-rounded" src="{{ asset('img/quote1.jpg') }}">
                </figure>
            </div>

@endsection

@section('scripts')
<script src="{{ asset('js/task.js') }}" ></script>
@endsection